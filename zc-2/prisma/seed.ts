import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const configs = [
    { key: 'site_title', value: '智成科技' },
    { key: 'site_description', value: '致力于为客户提供专业的技术解决方案' },
    { key: 'company_name', value: '智成科技有限公司' },
    { key: 'contact_phone', value: '400-888-8888' },
    { key: 'contact_email', value: 'contact@zhicheng.com' },
    { key: 'contact_address', value: '北京市朝阳区xxx大厦' },
    { key: 'hero_title', value: '让创新引领未来' },
    { key: 'hero_subtitle', value: '我们致力于为客户提供领先的技术解决方案，推动数字化转型，创造可持续价值。' },
  ]

  for (const c of configs) {
    await prisma.config.upsert({
      where: { key: c.key },
      update: {},
      create: c,
    })
  }

  // Reset products to match design exactly
  await prisma.product.deleteMany({})
  const products = [
    {
      title: '时空基础产品',
      description: '快速构建时空数字底座，赋能从数据到决策的完整链路',
      features: JSON.stringify(['时空数据智能处理软件', '时空数据服务发布管理软件', '时空智能三维网络端软件']),
      sortOrder: 1,
    },
    {
      title: '时空数据智能中台',
      description: '围绕数据"汇、治、管、供"全生命周期，深度融合大数据、AI与时空智能技术，提供从多源异构数据接入、自动化治理、资产化管理到智能化服务与应用构建的完整能力',
      features: JSON.stringify(['时空数据汇集系统', '时空数据治理系统', '时空数据管理系统', '时空数据应用系统', '安全管理系统', '权限管理系统']),
      sortOrder: 2,
    },
    {
      title: '时空智能平台级产品',
      description: '为客户提供"开箱即用、随需而变"的时空智能解决方案',
      features: JSON.stringify(['湖仓一体化数据管理平台', '智慧城市时空云平台', '时空数字孪生基础平台']),
      sortOrder: 3,
    },
  ]
  for (const p of products) {
    await prisma.product.create({ data: p })
  }

  // Reset solutions to 12 items matching design
  await prisma.solution.deleteMany({})
  const solutions = [
    { title: '实景三维一张图', description: '', icon: '', sortOrder: 1 },
    { title: '实景三维数据建库管理', description: '', icon: '', sortOrder: 2 },
    { title: '一张图数据库群', description: '', icon: '', sortOrder: 3 },
    { title: '一张图遥感影像统筹共享', description: '', icon: '', sortOrder: 4 },
    { title: '自然资源三维立体时空数据库', description: '', icon: '', sortOrder: 5 },
    { title: '数字孪生水利', description: '', icon: '', sortOrder: 6 },
    { title: '数字交通', description: '', icon: '', sortOrder: 7 },
    { title: '数字能源', description: '', icon: '', sortOrder: 8 },
    { title: '市域社会治理', description: '', icon: '', sortOrder: 9 },
    { title: '智慧农业', description: '', icon: '', sortOrder: 10 },
    { title: '透明地质保障', description: '', icon: '', sortOrder: 11 },
    { title: '......', description: '', icon: '', sortOrder: 12 },
  ]
  for (const s of solutions) {
    await prisma.solution.create({ data: s })
  }

  // Reset partners
  await prisma.partner.deleteMany({})
  const partners = [
    { name: '华为云', sortOrder: 1 },
    { name: '阿里云', sortOrder: 2 },
    { name: '腾讯云', sortOrder: 3 },
  ]
  for (const p of partners) {
    await prisma.partner.create({ data: p })
  }

  const newsList = [
    { title: '智成科技荣获2024年度高新技术企业认证', summary: '凭借在技术创新和研发投入方面的卓越表现，智成科技成功获得高新技术企业认证。', content: '智成科技荣获2024年度高新技术企业认证，这是对公司多年来坚持技术创新、加大研发投入的充分肯定。未来，我们将继续深耕技术领域，为客户创造更大价值。', isActive: true },
    { title: '智成科技发布新一代智能数据中台', summary: '全新升级的数据中台产品，提供更强大的数据处理与分析能力。', content: '智成科技正式发布新一代智能数据中台产品。新版本在数据治理、实时计算、可视化分析等方面进行了全面升级，为企业数字化转型提供更强劲的动力。', isActive: true },
    { title: '智成科技与头部云厂商达成战略合作', summary: '双方将围绕云计算、大数据、人工智能等领域展开深度合作。', content: '智成科技与国内头部云厂商正式签署战略合作协议。双方将在云计算基础设施建设、大数据平台共建、人工智能应用落地等方面展开全方位合作，共同服务企业客户。', isActive: true },
  ]

  for (const n of newsList) {
    const existing = await prisma.news.findFirst({ where: { title: n.title } })
    if (!existing) {
      await prisma.news.create({ data: n })
    }
  }

  console.log('Seed data created successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
