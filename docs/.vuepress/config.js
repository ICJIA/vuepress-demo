const path = require("path");

module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  // TODO: 看下host的配置
  host: "localhost",

  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。

    "/": {
      lang: "zh-CN",
      title: "VuePress",
      description: "Vue 驱动的静态网站生成器"
    },
    "/en/": {
      lang: "en-US", // 将会被设置为 <html> 的 lang 属性
      title: "VuePress",
      description: "Vue-powered Static Site Generator"
    }
  },
  themeConfig: {
    locales: {
      "/": {
        nav: [
          {
            text: "Home",
            link: "/zh/"
          },
          {
            text: "foo",
            link: "/zh/foo/"
          },
          {
            text: "bar",
            link: "/zh/bar/"
          }
        ],
        sidebar: {
          "/zh/foo/": [
            {
              title: "foo title",
              collapsable: false,
              children: [
                // "",
                "one",
                {
                  title: "foo 1-1",
                  collapsable: false,
                  children: ["one-one"]
                },
                "two"
              ]
            }
          ],
          "/zh/bar/": ["", "one", "two"]
        }
      },
      "/en/": {
        nav: [
          {
            text: "Home",
            link: "/en/"
          },
          {
            text: "foo",
            link: "/en/foo/"
          },
          {
            text: "bar",
            link: "/en/bar/"
          }
        ],
        sidebar: {
          "/en/foo/": [
            {
              title: "foo title",
              collapsable: false,
              children: [
                "",
                "one",
                {
                  title: "foo 1-1",
                  collapsable: false,
                  children: ["one-one"]
                },
                "two"
              ]
            }
          ],
          "/en/bar/": ["", "one", "two"]
        }
      }
    }
  },
  chainWebpack: (webpackConfig, isServer) => {
    webpackConfig.module
      .rule("js")
      .use("babel-loader")
      .loader("babel-loader")
      .options({
        presets: [
          [
            "@babel/preset-env",
            {
              useBuiltIns: "usage",
              corejs: 2
            }
          ]
        ],
        plugins: ["@babel/plugin-syntax-dynamic-import"]
      });
    webpackConfig.module
      .rule("compile")
      .test(/\.js$/)
      .include.add(/@vuepress/)
      .add(/.temp/)
      .add(/docs/)
      .add(/packages/)
      .end()
      .use("babel-loader")
      .loader("babel-loader")
      .options({
        presets: [
          [
            "@babel/preset-env",
            {
              useBuiltIns: "usage",
              corejs: 2
            }
          ]
        ],
        plugins: ["@babel/plugin-syntax-dynamic-import"]
      });
    // vuepress演示文档引入src的alias
    webpackConfig.resolve.alias.set(
      "myui",
      path.resolve(__dirname, "../../packages")
    );
  }
};
