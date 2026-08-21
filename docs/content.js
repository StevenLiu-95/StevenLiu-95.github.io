window.SITE_CONTENT = {
  document: {
    title: "MATRIX — Personal Hub"
  },
  brand: {
    name: "MATRIX",
    tag: "Personal Hub"
  },
  hint: "点击圆环扇区打开子界面",
  navigation: {
    ariaLabel: "四区导航",
    back: {
      label: "返回",
      ariaLabel: "返回主界面"
    },
    submenu: {
      ariaLabel: "二级菜单"
    },
    openSectionAria: "打开{title}"
  },
  stage: {
    kickerPlaceholder: "分区",
    titlePlaceholder: "标题"
  },
  sections: [
    {
      id: "resume",
      label: "简历",
      kicker: "Resume",
      title: "个人简历",
      submenu: [
        {
          label: "个人信息",
          body: [
            "姓名：刘彪",
            "方向：技术美术（TA）",
            "邮箱1：2834167415@qq.com",
            "邮箱2：StevenLiu95404@gmail.com",
            "电话：13599380853",
            "微信：liubiao13599380853",
            "QQ：2834167415",
            "Github：StevenLiu-95"
          ]
        },
        {
          label: "教育经历",
          body: [
            "学校：浙江理工大学",
            "专业：数字媒体艺术",
            "就读时间：2022.9 – 2026.6",
            "主修课程：设计美学概论，设计思维与方法，计算机与计算思维，计算机辅助设计，游戏造型设计，游戏三维模型，游戏场景设计，游戏道具设计。",
            "辅修课程：高等数学，机器学习"
          ]
        },
        {
          label: "技术能力",
          body: [
            "- 熟悉3DMax基础建模功能，掌握MaxScript、Python脚本语言及工具制作原理。",
            "- 掌握Maya基础建模、绑定、动画功能，熟悉ADV和Yeti等工具插件；掌握cmd、mel、pymel基础脚本语言。",
            "- 熟练运用Houdini进行复杂的程序化建模产出，熟悉Vex、Python等脚本语言在Houdini中的应用。掌握Houdini-UE工作流，能够独立进行HDA的开发。",
            "- 掌握Photoshop、Illustrator、Premiere、Blender等软件的基本操作。",
            "- 掌握Unity、Unreal Engine等游戏引擎的基本操作。",
            "- 掌握Python、C++、C#、HTML等编程语言的基本操作。",
            "- 掌握Git、SVN、Perforce等版本控制工具的基本操作。",
            "- 熟练使用RenderDoc对主流3A游戏进行逆向截帧分析。",
            "- 掌握Perfdog移动端性能测试的基本流程。",
            "- 熟练使用ComfyUI进行AI工作流搭建。",
            "- 掌握AI、机器学习、深度学习等人工智能技术的基本操作。"
          ]
        },
        {
          label: "工作经历",
          body: [
            "概述代表性项目：背景、职责、技术栈与成果。可附上链接或关键词。"
          ]
        }
      ]
    },
    {
      id: "works",
      label: "作品",
      kicker: "Works",
      title: "个人作品",
      body: [
        "此处列出你擅长的技术、工具或方法论。可用清单或短段落呈现。",
        "示例：前端、交互、视觉、自动化等——按你的真实能力改写。"
      ],
      submenu: [
        { label: "前端方向" },
        { label: "渲染方向" },
        { label: "PCG方向" },
        { label: "AI方向" }
      ]
    },
    {
      id: "projects",
      label: "项目",
      kicker: "分区三",
      title: "项目经历",
      body: [
        "在这里概述代表性项目：背景、职责、成果与链接。",
        "当前为占位内容，便于你直接替换为项目条目。"
      ],
      submenu: [
        { label: "项目甲" },
        { label: "项目乙" },
        { label: "项目丙" },
        { label: "项目丁" }
      ]
    },
    {
      id: "contact",
      label: "联系",
      kicker: "分区四",
      title: "联系我",
      body: [
        "留下邮箱、社交媒体或合作说明的占位文案。",
        "示例：hello@example.com — 请替换为你的真实联系方式。"
      ],
      submenu: [
        { label: "邮箱" },
        { label: "社交" },
        { label: "合作" },
        { label: "留言" }
      ]
    }
  ]
};
