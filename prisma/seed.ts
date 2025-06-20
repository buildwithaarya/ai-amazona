import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed users
  const user1 = await prisma.user.upsert({
    where: { email: 'alice@example.com' },
    update: {},
    create: {
      email: 'alice@example.com',
      password: 'password123', // In production, use hashed passwords!
      name: 'Alice Smith',
      image: null,
    },
  });
  const user2 = await prisma.user.upsert({
    where: { email: 'bob@example.com' },
    update: {},
    create: {
      email: 'bob@example.com',
      password: 'password123',
      name: 'Bob Johnson',
      image: null,
    },
  });

  // Seed categories and products
  const categories = [
    {
      name: 'T-shirts',
      imageUrl: '/images/c-tshirts.jpg',
      products: [
        {
          name: 'Classic White Tee',
          description: 'A timeless white t-shirt for everyday wear.',
          price: 19.99,
          imageUrl: '/images/p11-1.jpg',
          stock: 100,
        },
        {
          name: 'Graphic Print Tee',
          description: 'Trendy t-shirt with a bold graphic print.',
          price: 24.99,
          imageUrl: '/images/p11-2.jpg',
          stock: 80,
        },
      ],
    },
    {
      name: 'Jeans',
      imageUrl: '/images/c-jeans.jpg',
      products: [
        {
          name: 'Slim Fit Jeans',
          description: 'Comfortable slim fit jeans for a modern look.',
          price: 49.99,
          imageUrl: '/images/p21-1.jpg',
          stock: 60,
        },
        {
          name: 'Classic Blue Jeans',
          description: 'Classic blue denim jeans for any occasion.',
          price: 44.99,
          imageUrl: '/images/p21-2.jpg',
          stock: 70,
        },
      ],
    },
    {
      name: 'Shoes',
      imageUrl: '/images/c-shoes.jpg',
      products: [
        {
          name: 'Running Sneakers',
          description: 'Lightweight sneakers perfect for running.',
          price: 59.99,
          imageUrl: '/images/p31-1.jpg',
          stock: 50,
        },
        {
          name: 'Leather Boots',
          description: 'Durable leather boots for all seasons.',
          price: 89.99,
          imageUrl: '/images/p31-2.jpg',
          stock: 40,
        },
      ],
    },
  ];

  for (const category of categories) {
    const createdCategory = await prisma.category.upsert({
      where: { name: category.name },
      update: {},
      create: {
        name: category.name,
        products: {
          create: category.products.map((product) => ({
            name: product.name,
            description: product.description,
            price: product.price,
            imageUrl: product.imageUrl,
            stock: product.stock,
          })),
        },
      },
    });
  }

  console.log('Seed completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 