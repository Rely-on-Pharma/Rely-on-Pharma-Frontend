/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["logos-world.net","www.hismileteeths.us","loremflickr.com", "picsum.photos", "images.unsplash.com",`${process.env.AWS_BUCKET}`], //make it 'your-domain.com'
      },
}

module.exports = nextConfig
