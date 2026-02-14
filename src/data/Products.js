
export const products = [
    {
      id: 'zx9-speaker',
      slug: 'zx9-speaker',
      name: 'ZX9 SPEAKER',
      category: 'speakers',
      isNew: true,
      price: 8500,
      description: 'Upgrade your sound system with the all-new ZX9 active speaker. It’s a beautifully speaker system that offers truly wireless connectivity – creating new possibilities for more pleasing and practical audio setups.',
      features: 'Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near-lossless audio quality at up to 128Hz (10cm).\n\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-sharing bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.',
      includes: [
        { quantity: 1, item: 'ZX9 Speaker Unit' },
        { quantity: 1, item: 'ZX9 Speaker Clip Panel' },
        { quantity: 1, item: 'User Manual' },
        { quantity: 1, item: '3.5mm 1m Audio Cable' },
        { quantity: 1, item: '10m Optical Cable' }
      ],
      others: [
        { slug: 'zx7-speaker', name: 'ZX7 SPEAKER' },
        { slug: 'xx99-mark-i', name: 'XX99 MARK I' },
        { slug: 'xx59', name: 'XX59' }
      ],
      image: 'bg-[#D0BDA4]' // placeholder – replace with actual image path
    },
    {
      id: 'xx99-mark-ii',
      slug: 'xx99-mark-ii',
      name: 'XX99 MARK II HEADPHONES',
      category: 'headphones',
      isNew: true,
      price: 2999,
      description: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
      features: 'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5.0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
      includes: [
        { quantity: 1, item: 'Headphone Unit' },
        { quantity: 2, item: 'Replacement Earcups' },
        { quantity: 1, item: 'User Manual' },
        { quantity: 1, item: '3.5mm 5m Audio Cable' },
        { quantity: 1, item: 'Travel Bag' }
      ],
      others: [
        { slug: 'xx99-mark-i', name: 'XX99 MARK I' },
        { slug: 'xx59', name: 'XX59' },
        { slug: 'zx9-speaker', name: 'ZX9 SPEAKER' }
      ],
      image: 'bg-gray-800'
    },
    {
      id: 'xx99-mark-i',
      slug: 'xx99-mark-i',
      name: 'XX99 MARK I HEADPHONES',
      category: 'headphones',
      isNew: false,
      price: 1750,
      description: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
      features: 'At the headphone all others are measured against the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.',
      includes: [
        { quantity: 1, item: 'Headphone Unit' },
        { quantity: 2, item: 'Replacement EarCups' },
        { quantity: 1, item: 'User Manual' },
        { quantity: 1, item: '3.5mm 5m Audio Cable' }
      ],
      others: [
        { slug: 'xx99-mark-ii', name: 'XX99 MARK II' },
        { slug: 'xx59', name: 'XX59' },
        { slug: 'zx9-speaker', name: 'ZX9 SPEAKER' }
      ],
      image: 'bg-gray-300'
    },
    // Add XX59, ZX7, YX1 similarly...
  ];