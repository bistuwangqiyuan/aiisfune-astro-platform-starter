# 北京信息科技大学 · 大学生 AI 通识课

北京信息科技大学大学生人工智能通识课官方网站，基于 Astro + Tailwind CSS 构建。

## 本地开发

```bash
npm install
npm run dev
```

访问 [http://localhost:4321](http://localhost:4321)

## 构建

```bash
npm run build
npm run preview
```

## 站点结构

| 路由 | 页面 |
|------|------|
| `/` | 首页 |
| `/course` | 课程介绍 |
| `/chapters` | 课程章节 |
| `/chapters/[slug]` | 章节详情 |
| `/labs` | 实验实践 |
| `/resources` | 学习资源 |
| `/about` | 关于学校 |

## 部署

项目配置了 `@astrojs/netlify` 适配器，可部署至 Netlify 或兼容平台。
