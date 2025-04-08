import { PrismaClient } from '../generated/prisma'

const prisma = new PrismaClient()

async function main() {
  const users = await prisma.user.findMany()
  console.log(users)
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect())
