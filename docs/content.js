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
  /** 媒体资源路径（相对 docs/index.html） */
  media: {
    videosDir: "videos/",
    imagesDir: "images/"
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
      /**
       * 层级：
       * 作品分区
       * └─ 分类（submenu.label，对应二级扇环）
       *    └─ 作品（works[]）
       *       ├─ description 描述
       *       ├─ media[]     媒体（图片/视频可任意穿插；按扩展名自动识别）
       *       │              图片文件放 images/，视频文件放 videos/
       *       └─ link / links / link1…  访问链接（可选）
       */
      submenu: [
        {
          label: "独立游戏",
          body: ["独立游戏相关作品集。"],
          works: [
            {
              title: "《悟空·灵境行者》",
              description: [
                "个人独立游戏项目"
              ],
              media: [
                { file: "GoldenHall01.png" },
                { file: "GoldenHallPV01.mp4" }
              ],
              link1: {
                url: "https://www.bilibili.com/video/BV1bH726xEc4/?share_source=copy_web&vd_source=e1553d34d671f2776233cf93d6b4aa02",
                label: "BiliBili视频链接1"
              }
            },
            {
              title: "作品B",
              description: ["另一款独立游戏作品的简介。"],
              media: [
                { file: "indie-b-01.mp4", title: "视频1" }
              ]
            },
            {
              title: "作品C",
              description: ["可继续追加更多作品条目。"],
              media: [
                { file: "indie-c-01.mp4", title: "视频1" }
              ]
            }
          ]
        },
        {
          label: "程序化生成",
          body: ["PCG / 程序化内容相关作品。"],
          works: [
            {
              title: "作品A",
              description: ["程序化生成方案与效果说明。"],
              media: [
                { file: "pcg-a-01.mp4", title: "视频1" },
                { file: "pcg-a-02.mp4", title: "视频2" }
              ]
            }
          ]
        },
        {
          label: "工具开发",
          body: ["工具、插件或管线相关作品。"],
          works: [
            {
              title: "作品A",
              description: ["工具用途、技术栈与使用方式。"],
              media: [
                { file: "tool-a-01.mp4", title: "视频1" }
              ],
              link: "https://github.com/StevenLiu-95"
            }
          ]
        },
        {
          label: "Shader/特效",
          body: ["Shader、特效与渲染表现相关作品。"],
          works: [
            {
              title: "镭射布料",
              description: ["基于 Unity Shader 的镭射效果实现"],
              media: [
                { file: "ColorfulCloth1.mp4", title: "尼龙镭射" },
                { file: "ColorfulCloth2.mp4", title: "尼龙镭射" },
                { file: "ColorfulCloth3.mp4", title: "镭射" },
                { file: "ColorfulCloth4.mp4", title: "镭射" }
              ]
            }
          ]
        },
        {
          label: "AIGC",
          body: ["AI / AIGC 相关创作与工作流。"],
          works: [
            {
              title: "作品A",
              description: ["工作流与产出说明。"],
              media: [
                { file: "aigc-a-01.mp4", title: "视频1" }
              ]
            }
          ]
        },
        {
          label: "动画作品",
          body: ["动画与镜头相关作品。"],
          works: [
            {
              title: "作品A",
              description: ["镜头设计与制作说明。"],
              media: [
                { file: "anim-a-01.mp4", title: "视频1" }
              ]
            }
          ]
        },
        {
          label: "建模作品",
          body: ["建模与资产相关展示。"],
          works: [
            {
              title: "作品A",
              description: ["资产类型与制作流程说明。"],
              media: [
                { file: "model-a-01.jpg", title: "渲染图1" },
                { file: "model-a-01.mp4", title: "周转展示" },
                { file: "model-a-02.jpg", title: "渲染图2" },
                "model-a-03.png"
              ]
            }
          ]
        }
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
