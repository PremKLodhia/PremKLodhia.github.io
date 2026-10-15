import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs('assets', exist_ok=True)

# 1. Generate Favicon SVG
svg_content = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#1d1d1f"/>
  <text x="32" y="42" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', Inter, sans-serif" font-size="28" font-weight="600" fill="#ffffff" text-anchor="middle" letter-spacing="-0.5">PL</text>
</svg>"""
with open('assets/favicon.svg', 'w') as f:
    f.write(svg_content)

# 2. Generate Favicon 32x32 and Apple Touch Icon 180x180
def create_icon(size, filename):
    img = Image.new('RGBA', (size, size), (29, 29, 31, 255))
    draw = ImageDraw.Draw(img)
    try:
        font = ImageFont.truetype('arial.ttf', int(size * 0.44))
    except Exception:
        font = ImageFont.load_default()
    bbox = draw.textbbox((0, 0), 'PL', font=font)
    w = bbox[2] - bbox[0]
    h = bbox[3] - bbox[1]
    draw.text(((size - w) / 2, (size - h) / 2 - size * 0.04), 'PL', fill=(255, 255, 255, 255), font=font)
    img.save(filename)

create_icon(32, 'assets/favicon-32x32.png')
create_icon(180, 'assets/apple-touch-icon.png')

# 3. Generate 1200x630 Open Graph Image
og_img = Image.new('RGB', (1200, 630), (250, 250, 252))
og_draw = ImageDraw.Draw(og_img)

# Add Apple-style subtle inner line
og_draw.rectangle([(24, 24), (1176, 606)], outline=(225, 225, 230), width=1)

try:
    f_eyebrow = ImageFont.truetype('arial.ttf', 20)
    f_name = ImageFont.truetype('arialbd.ttf', 36)
    f_title = ImageFont.truetype('arialbd.ttf', 72)
    f_sub = ImageFont.truetype('arial.ttf', 28)
    f_btn = ImageFont.truetype('arialbd.ttf', 20)
except Exception:
    f_eyebrow = f_name = f_title = f_sub = f_btn = ImageFont.load_default()

# Header Brand
og_draw.text((80, 80), 'Prem Lodhia', fill=(29, 29, 31), font=f_name)
og_draw.text((80, 140), 'Software Engineer', fill=(0, 113, 227), font=f_eyebrow)

# Headline
og_draw.text((80, 220), 'Architect. Build. Scale.', fill=(29, 29, 31), font=f_title)

# Subtitle / Lead
lead_text = 'Software engineer building high throughput backends\nand low latency financial systems.\nSeeking a 2027/2028 placement. Open to Summer 2027 internships.'
og_draw.multiline_text((80, 340), lead_text, fill=(110, 110, 115), font=f_sub, spacing=12)

# Pill Footer
og_draw.rounded_rectangle([(80, 490), (320, 545)], radius=27, fill=(0, 113, 227))
og_draw.text((115, 506), 'premlodhia.com', fill=(255, 255, 255), font=f_btn)

og_img.save('assets/og-image.png')
print('Generated icons and OG image successfully!')

# 4. Convert project images to WebP
converted = 0
for fname in os.listdir('assets'):
    if fname.endswith(('.png', '.jpg')) and not fname.endswith(('-32x32.png', 'og-image.png', 'apple-touch-icon.png')):
        src = os.path.join('assets', fname)
        base = os.path.splitext(fname)[0]
        dst = os.path.join('assets', base + '.webp')
        try:
            im = Image.open(src).convert('RGB')
            im.save(dst, 'WEBP', quality=88)
            converted += 1
        except Exception as e:
            print('Error converting', fname, e)
print(f'Converted {converted} images to WebP!')
