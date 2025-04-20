
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <img
          src="/logo.png"
          alt="小马过河 Logo"
          className="mx-auto w-32 h-32 object-contain"
        />
        <h1 className="text-4xl font-bold">波士顿私立学校申请服务</h1>
        <p className="text-lg">
          为大波士顿地区华人家庭提供个性化支持，专注于幼儿园至小学二年级的私立学校申请流程，包括择校建议、面试准备、申请材料和助学金申请等全方位服务。
        </p>
        <div className="bg-yellow-50 p-6 rounded-2xl shadow space-y-4">
          <h2 className="text-2xl font-semibold">服务套餐</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white border p-4 rounded-2xl shadow">
              <h3 className="text-xl font-bold">基础套餐</h3>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>两次一小时咨询</li>
                <li>一个月内邮件答疑</li>
                <li>申请时间表与指导建议</li>
                <li>个人陈述或家庭介绍修改</li>
              </ul>
              <p className="mt-4 font-semibold">$400</p>
            </div>
            <div className="bg-white border p-4 rounded-2xl shadow">
              <h3 className="text-xl font-bold">申请套餐</h3>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>完整申请规划</li>
                <li>材料与简历修改</li>
                <li>家长和孩子面试辅导</li>
                <li>择校分析与建议</li>
              </ul>
              <p className="mt-4 font-semibold">$800</p>
            </div>
            <div className="bg-white border p-4 rounded-2xl shadow">
              <h3 className="text-xl font-bold">全程陪伴套餐</h3>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>包含基础与申请套餐全部内容</li>
                <li>助学金申请支持</li>
                <li>整个申请季节全程答疑</li>
                <li>等候名单沟通与申诉信指导</li>
              </ul>
              <p className="mt-4 font-semibold">$1500</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-2xl shadow space-y-4">
          <h2 className="text-2xl font-semibold">助学金申请（可选）</h2>
          <ul className="text-left list-disc list-inside space-y-2">
            <li>免费15分钟电话了解家庭情况与目标</li>
            <li>详细讲解Clarity、SSS或FACTS助学金系统</li>
            <li>优化财务资料展现方式</li>
            <li>修改申诉信与支持材料</li>
            <li><strong>无需预付费</strong> — 获得资助后按10%收取佣金</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow space-y-4">
          <h2 className="text-2xl font-semibold">添加我的微信</h2>
          <p>扫描二维码，通过微信添加我为好友：</p>
          <img
            src="/wechat-qr.jpg"
            alt="微信二维码"
            className="mx-auto w-64 h-64 object-contain border"
          />
        </div>
        <footer className="pt-12 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} 小马过河学校咨询服务 版权所有
        </footer>
      </section>
    </main>
  );
}
