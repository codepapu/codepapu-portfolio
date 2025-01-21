import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import logocodepapu from '../../assets/images/logo.png';

import adobeBgRemoveImg from '../../assets/images/software_tools/adobebgremove.png';
import adobeXdImg from '../../assets/images/software_tools/adobe_xd.png';
import balsamiqImg from '../../assets/images/software_tools/balsamiq.png';
import capCutImg from '../../assets/images/software_tools/capcut.jpg';
import carbonNowImg from '../../assets/images/software_tools/carbon_now_sh.ico';
import codechefImg from '../../assets/images/software_tools/codechef.png';
import codepngImg from '../../assets/images/software_tools/codepng.png';
import davinciResolveImg from '../../assets/images/software_tools/davinci_resolve.png';
import drawioImg from '../../assets/images/software_tools/drawio.png';
import edrawMaxImg from '../../assets/images/software_tools/edrawmax.png';
import eraseBgImg from '../../assets/images/software_tools/erasebg.png';
import excalidrawImg from '../../assets/images/software_tools/excelidraw.png';
import evernoteImg from '../../assets/images/software_tools/evernote.png';
import figmaImg from '../../assets/images/software_tools/figma.png';
import firebaseImg from '../../assets/images/software_tools/firebase.png';
import goDaddyImg from '../../assets/images/software_tools/godaddy.png';
import googleSitesImg from '../../assets/images/software_tools/google_sites.png';
import hackerrankImg from '../../assets/images/software_tools/hackerrank.png';
import hostingerImg from '../../assets/images/software_tools/hostinger.png';
import invisionImg from '../../assets/images/software_tools/invisionapp.png';
import jamboardImg from '../../assets/images/software_tools/jamboard.png';
import leetcodeImg from '../../assets/images/software_tools/leetcode.png';
import lucidchartImg from '../../assets/images/software_tools/lucidchart.png';
import miroImg from '../../assets/images/software_tools/miro.png';
import msPaintClassicImg from '../../assets/images/software_tools/ms_paint_classic.png';
import msPaintImg from '../../assets/images/software_tools/ms_paint.png';
import msWhiteboardImg from '../../assets/images/software_tools/ms_whiteboard.png';
import netlifyImg from '../../assets/images/software_tools/netlify.png';
import notionImg from '../../assets/images/software_tools/notion.png';
import obsidianImg from '../../assets/images/software_tools/obsidian.png';
import oneNoteImg from '../../assets/images/software_tools/onenote.svg';
import premiereProImg from '../../assets/images/software_tools/premiere_pro.png';
import raySoImg from '../../assets/images/software_tools/ray_so.png';
import removeBgImg from '../../assets/images/software_tools/bgremove.png';
import shopifyImg from '../../assets/images/software_tools/shopify.png';
import sketchImg from '../../assets/images/software_tools/sketch.png';
import tldrawImg from '../../assets/images/software_tools/tldraw.png';
import typoraImg from '../../assets/images/software_tools/typora.png';
import vercelImg from '../../assets/images/software_tools/vercel.png';
import webflowImg from '../../assets/images/software_tools/webflow.png';
import wixImg from '../../assets/images/software_tools/wix.png';
import wordpressImg from '../../assets/images/software_tools/wordpress.png';


import freeFontsImg from '../../assets/images/ui_resources/1001freefonts.png';
import apexChartsImg from '../../assets/images/ui_resources/apexcharts.png';
import boxIconImg from '../../assets/images/ui_resources/boxicon.png';
import chartJsImg from '../../assets/images/ui_resources/chart_js.png';
import colorAdobeImg from '../../assets/images/ui_resources/color_adobe.png';
import coolorsImg from '../../assets/images/ui_resources/coolors.png';
import cssGradientImg from '../../assets/images/ui_resources/css_gradient.png';
import dafontImg from '../../assets/images/ui_resources/dafont.png';
import devIconImg from '../../assets/images/ui_resources/devicon.png';
import eChartsImg from '../../assets/images/ui_resources/echarts.png';
import flaticonImg from '../../assets/images/ui_resources/flaticon.png';
import flatuicolorsImg from '../../assets/images/ui_resources/flatuicolors.png';
import fontAwesomeImg from '../../assets/images/ui_resources/fontawesome.png';
import fontsComImg from '../../assets/images/ui_resources/fonts_com.png';
import fontSpaceImg from '../../assets/images/ui_resources/fontspace.png';
import freepikImg from '../../assets/images/ui_resources/freepik.png';
import googleFontsImg from '../../assets/images/ui_resources/google_fonts.png';
import htmlColorCodesImg from '../../assets/images/ui_resources/htmlcolorcodes.png';
import icomoonImg from '../../assets/images/ui_resources/icomoon.png';
import iconGetBootstrapImg from '../../assets/images/ui_resources/icon_getbootstrap.png';
import iconfinderImg from '../../assets/images/ui_resources/iconfinder.png';
import iconscoutImg from '../../assets/images/ui_resources/iconscout.png';
import iStockPhotoImg from '../../assets/images/ui_resources/istockphoto.png';
import lucideImg from '../../assets/images/ui_resources/lucide.png';
import pinterestImg from '../../assets/images/ui_resources/pinterest.png';
import pixabayImg from '../../assets/images/ui_resources/pixabay.png';
import remixIconImg from '../../assets/images/ui_resources/remixicon.jpeg';
import undrawImg from '../../assets/images/ui_resources/undraw.png';
import unsplashImg from '../../assets/images/ui_resources/unsplash.png';
import wallpapersHomeImg from '../../assets/images/ui_resources/wallpapershome.png';

const onlineCodingPatfroms = [{
  label: "Online Coding Platforms",
  items: [
    {
      name: "LeetCode",
      link: "https://leetcode.com/",
      image: <img src={leetcodeImg} alt="LeetCode" width="20" height="20" />,
      checkMark: true
    },
    {
      name: "HackerRank",
      link: "https://www.hackerrank.com/",
      image: <img src={hackerrankImg} alt="HackerRank" width="20" height="20" />,
      checkMark: false
    },
    {
      name: "CodeChef",
      link: "https://www.codechef.com/",
      image: <img src={codechefImg} alt="CodeChef" width="20" height="20" />,
      checkMark: false
    },
  ],
},];

const onlineWhiteboard = [{
  label: "Online Whiteboard",
  items: [
    {
      name: "Excalidraw",
      link: "https://excalidraw.com/",
      image: <img src={excalidrawImg} alt="Excalidraw" width="20" height="20" />,
      checkMark: true
    },
    {
      name: "tldraw",
      link: "https://www.tldraw.com/",
      image: <img src={tldrawImg} alt="tldraw" width="20" height="20" />,
      checkMark: true
    },
    {
      name: "Miro",
      link: "https://miro.com/app/dashboard/",
      image: <img src={miroImg} alt="Miro" width="20" height="20" />,
      checkMark: false
    },
    {
      name: "Jamboard",
      link: "https://jamboard.google.com/",
      image: <img src={jamboardImg} alt="Jamboard" width="20" height="20" />,
      checkMark: false
    },
  ],
},];

const offlineWhiteboard = [{
  label: "Offline Whiteboard",
  items: [
    {
      name: "MS Paint Classic",
      link: "https://win7games.com/#mspaint",
      image: <img src={msPaintClassicImg} alt="MS Paint Classic" width="20" height="20" />,
      checkMark: true
    },
    {
      name: "MS Paint",
      link: "https://apps.microsoft.com/detail/9PCFS5B6T72H?ocid=pdpshare&hl=en-us&gl=US",
      image: <img src={msPaintImg} alt="MS Paint" width="20" height="20" />,
      checkMark: false
    },
    {
      name: "MS Whiteboard",
      link: "https://www.microsoft.com/store/productId/9MSPC6MP8FM4?ocid=pdpshare",
      image: <img src={msWhiteboardImg} alt="MS Whiteboard" width="20" height="20" />,
      checkMark: false
    },
  ],
},];

const erDiagram = [{
  label: "System Design & ER Diagrams",
  items: [
    {
      name: "Draw.io",
      link: "https://app.diagrams.net/",
      image: <img src={drawioImg} alt="Draw.io" width="20" height="20" />,
      checkMark: true
    },
    {
      name: "Lucidchart",
      link: "https://www.lucidchart.com/",
      image: <img src={lucidchartImg} alt="Lucidchart" width="20" height="20" />,
      checkMark: false
    },
    {
      name: "EdrawMax",
      link: "https://www.edrawmax.com/",
      image: <img src={edrawMaxImg} alt="EdrawMax" width="20" height="20" />,
      checkMark: false
    },
  ],
},];

const freeHosting = [{
  label: "Free Hosting for Static Websites",
  items: [
    {
      name: "GitHub",
      link: "https://pages.github.com/",
      image: <i class="devicon-github-original colored me-2 fs-3"></i>,
      checkMark: false
    },
    {
      name: "Vercel",
      link: "https://vercel.com/",
      image: <img src={vercelImg} alt="Vercel" width="20" height="20" />,
      checkMark: false
    },
    {
      name: "Firebase",
      link: "https://firebase.google.com/",
      image: <img src={firebaseImg} alt="Firebase" width="20" height="20" />,
      checkMark: false
    },
    {
      name: "Netlify",
      link: "https://www.netlify.com/",
      image: <img src={netlifyImg} alt="Netlify" width="20" height="20" />,
      checkMark: false
    },
  ],
},];

const paidHosting = [{
  label: "DNS + SSL + Hosting on Affordable Price",
  items: [
    {
      name: "GoDaddy",
      link: "https://www.godaddy.com/",
      image: <img src={goDaddyImg} alt="GoDaddy" width="20" height="20" />,
      checkMark: false
    },
    {
      name: "Hostinger",
      link: "https://www.hostinger.in/",
      image: <img src={hostingerImg} alt="Hostinger" width="20" height="20" />,
      checkMark: false
    }
  ]
},];

const noteTaking = [{
  label: "Next Gen. Note Taking",
  items: [
    {
      name: "Obsidian",
      link: "https://obsidian.md/",
      image: <img src={obsidianImg} alt="Obsidian" width="20" height="20" />,
      checkMark: false
    },
    {
      name: "OneNote",
      link: "https://www.microsoft.com/store/productId/9WZDNCRFHVJL",
      image: <img src={oneNoteImg} alt="OneNote" width="20" height="20" />,
      checkMark: false
    },
    {
      name: "Evernote",
      link: "https://evernote.com/",
      image: <img src={evernoteImg} alt="Evernote" width="20" height="20" />,
      checkMark: false
    },
    {
      name: "Notion",
      link: "https://www.notion.so/",
      image: <img src={notionImg} alt="Notion" width="20" height="20" />,
      checkMark: false
    },
    {
      name: "Typora",
      link: "https://typora.io/",
      image: <img src={typoraImg} alt="Typora" width="20" height="20" />,
      checkMark: false
    }
  ]
},];

const uxDesign = [{
  label: "UX Design",
  items: [
    {
      name: "Figma",
      link: "https://www.figma.com/",
      image: <img src={figmaImg} alt="Figma" width="20" height="20" />,
      checkMark: true
    },
    {
      name: "Adobe XD",
      link: "https://helpx.adobe.com/xd/get-started.html",
      image: <img src={adobeXdImg} alt="Adobe XD" width="20" height="20" />,
      checkMark: true
    },
    {
      name: "Webflow",
      link: "https://webflow.com/",
      image: <img src={webflowImg} alt="Webflow" width="20" height="20" />,
      checkMark: false
    },
    {
      name: "InVision",
      link: "https://www.invisionapp.com/",
      image: <img src={invisionImg} alt="InVision" width="20" height="20" />,
      checkMark: false
    },
    {
      name: "Sketch",
      link: "https://www.sketch.com/",
      image: <img src={sketchImg} alt="Sketch" width="20" height="20" />,
      checkMark: false
    },
    {
      name: "Balsamiq",
      link: "https://balsamiq.com/",
      image: <img src={balsamiqImg} alt="Balsamiq" width="20" height="20" />,
      checkMark: false
    }
  ]
},];

const websiteBuilder = [{
  label: "Website Builder",
  items: [
    {
      name: "Google Sites",
      link: "https://sites.google.com/new",
      image: <img src={googleSitesImg} alt="Google Sites" width="20" height="20" />,
      checkMark: true
    },
    {
      name: "Wix",
      link: "https://www.wix.com/",
      image: <img src={wixImg} alt="Wix" width="20" height="20" />,
      checkMark: true
    },
    {
      name: "WordPress",
      link: "https://wordpress.com/",
      image: <img src={wordpressImg} alt="WordPress" width="20" height="20" />,
      checkMark: false
    },
    {
      name: "GoDaddy",
      link: "https://www.godaddy.com/",
      image: <img src={goDaddyImg} alt="GoDaddy" width="20" height="20" />,
      checkMark: false
    },
    {
      name: "Hostinger",
      link: "https://www.hostinger.in/",
      image: <img src={hostingerImg} alt="Hostinger" width="20" height="20" />,
      checkMark: false
    },
    {
      name: "Shopify",
      link: "https://www.shopify.com/",
      image: <img src={shopifyImg} alt="Shopify" width="20" height="20" />,
      checkMark: false
    }
  ]
},];

const codeToImage = [{
  label: "Code to Image",
  items: [
    {
      name: "Ray.so",
      link: "https://ray.so/",
      image: <img src={raySoImg} alt="Ray.so" width="20" height="20" />,
      checkMark: true
    },
    {
      name: "Carbon Now",
      link: "https://carbon.now.sh/",
      image: <img src={carbonNowImg} alt="Carbon Now" width="20" height="20" />,
      checkMark: true
    },
    {
      name: "Codepng",
      link: "https://www.codepng.app/",
      image: <img src={codepngImg} alt="Codepng" width="20" height="20" />,
      checkMark: false
    }
  ]
},];

const backgroundRemover = [{
  label: "Background Remover",
  items: [
    {
      name: "Remove.bg",
      link: "https://www.remove.bg/",
      image: <img src={removeBgImg} alt="Remove.bg" width="20" height="20" />,
      checkMark: true
    },
    {
      name: "Erase.bg",
      link: "https://www.erase.bg/",
      image: <img src={eraseBgImg} alt="Erase.bg" width="20" height="20" />,
      checkMark: true
    },
    {
      name: "Adobe",
      link: "https://www.adobe.com/express/feature/image/remove-background",
      image: <img src={adobeBgRemoveImg} alt="Adobe" width="20" height="20" />,
      checkMark: false
    }
  ]
},];

const videoEditing = [{
  label: "Video Editing",
  items: [
    {
      name: "Premiere Pro",
      link: "https://app.diagrams.net/",
      image: <img src={premiereProImg} alt="Premiere Pro" width="20" height="20" />,
      checkMark: true
    },
    {
      name: "DaVinci Resolve",
      link: "https://www.blackmagicdesign.com/in/products/davinciresolve",
      image: <img src={davinciResolveImg} alt="DaVinci Resolve" width="20" height="20" />,
      checkMark: false
    },
    {
      name: "CapCut",
      link: "https://capcut.en.uptodown.com/windows/download",
      image: <img src={capCutImg} alt="CapCut" width="20" height="20" />,
      checkMark: false
    }
  ]
},];

const colorPickerTools = [{
  label: "Color Picker Tools",
  items: [
    {
      name: "Coolors",
      image: <img src={coolorsImg} alt="Coolors" width="20" height="20" />,
      link: "https://coolors.co/",
      checkMark: true,
      description: "Highly recommended, open source free, user-friendly, and currently in use."
    },
    {
      name: "HTML Color",
      image: <img src={htmlColorCodesImg} alt="HTML Color" width="20" height="20" />,
      link: "https://htmlcolorcodes.com/",
      checkMark: true,
      description: "Highly recommended, open source free, user-friendly, and currently in use."
    },
    {
      name: "Adobe Color",
      image: <img src={colorAdobeImg} alt="Adobe Color" width="20" height="20" />,
      link: "https://color.adobe.com/",
      checkMark: false
    },
    {
      name: "Flat UI Color",
      image: <img src={flatuicolorsImg} alt="Flat UI Color" width="20" height="20" />,
      link: "https://flatuicolors.com/",
      checkMark: false
    },
    {
      name: "CSS Gradient",
      image: <img src={cssGradientImg} alt="CSS Gradient" width="20" height="20" />,
      link: "https://cssgradient.io/",
      checkMark: false
    }
  ]
}];

const iconTools = [{
  label: "Icon Tools",
  items: [
    {
      name: "Font Awesome",
      image: <img src={fontAwesomeImg} alt="Font Awesome" width="20" height="20" />,
      link: "https://fontawesome.com/",
      checkMark: true,
      description: "Highly recommended, open source free, user-friendly, and currently in use."
    },
    {
      name: "Lucide",
      image: <img src={lucideImg} alt="Lucide" width="20" height="20" />,
      link: "https://lucide.dev/",
      checkMark: false
    },
    {
      name: "Bootstrap Icon",
      image: <img src={iconGetBootstrapImg} alt="Bootstrap Icon" width="20" height="20" />,
      link: "https://icons.getbootstrap.com/",
      checkMark: false
    },
    {
      name: "Flaticon",
      image: <img src={flaticonImg} alt="Flaticon" width="20" height="20" />,
      link: "https://www.flaticon.com/",
      checkMark: false
    },
    {
      name: "Iconfinder",
      image: <img src={iconfinderImg} alt="Iconfinder" width="20" height="20" />,
      link: "https://www.iconfinder.com/",
      checkMark: false
    },
    {
      name: "Devicon",
      image: <img src={devIconImg} alt="Devicon" width="20" height="20" />,
      link: "https://devicon.dev/",
      checkMark: false
    },
    {
      name: "IcoMoon",
      image: <img src={icomoonImg} alt="IcoMoon" width="20" height="20" />,
      link: "https://icomoon.io/",
      checkMark: false
    },
    {
      name: "Boxicons",
      image: <img src={boxIconImg} alt="Boxicons" width="20" height="20" />,
      link: "https://boxicons.com/",
      checkMark: false
    },
    {
      name: "Remix Icon",
      image: <img src={remixIconImg} alt="Remix Icon" width="20" height="20" />,
      link: "https://remixicon.com/",
      checkMark: false
    }
  ]
}];

const fontTools = [{
  label: "Font",
  items: [
    {
      name: "Google Fonts",
      image: <img src={googleFontsImg} alt="Google Fonts" width="20" height="20" />,
      link: "https://fonts.google.com/",
      checkMark: true,
      description: "Highly recommended, open source free, user-friendly, and am using"
    },
    {
      name: "FontSpace",
      image: <img src={fontSpaceImg} alt="FontSpace" width="20" height="20" />,
      link: "https://www.fontspace.com/",
      checkMark: false
    },
    {
      name: "Dafont",
      image: <img src={dafontImg} alt="Dafont" width="20" height="20" />,
      link: "https://www.dafont.com/",
      checkMark: false
    },
    {
      name: "Fonts.com",
      image: <img src={fontsComImg} alt="Fonts.com" width="20" height="20" />,
      link: "https://www.fonts.com/",
      checkMark: false
    },
    {
      name: "1001freefonts",
      image: <img src={freeFontsImg} alt="1001freefonts" width="20" height="20" />,
      link: "https://www.1001freefonts.com/",
      checkMark: false
    }
  ]
}];

const chartTools = [
  {
    label: "Charts",
    items: [
      {
        name: "ApexCharts.js",
        image: <img src={apexChartsImg} alt="ApexCharts" width="20" height="20" />,
        link: "https://apexcharts.com/",
        checkMark: true,
        description: "Highly recommended, open source free, user-friendly, and am using"
      },
      {
        name: "Chart.js",
        image: <img src={chartJsImg} alt="Chart.js" width="20" height="20" />,
        link: "https://www.chartjs.org",
        checkMark: false
      },
      {
        name: "Apache ECharts",
        image: <img src={eChartsImg} alt="Apache ECharts" width="20" height="20" />,
        link: "https://echarts.apache.org/",
        checkMark: false
      }
    ]
  }
];

const stockImageTools = [
  {
    label: "Stock Images",
    items: [
      {
        name: "Pinterest",
        image: <img src={pinterestImg} alt="Pinterest" width="20" height="20" />,
        link: "https://in.pinterest.com/",
        checkMark: true,
        description: "Highly recommended, open source free, user friendly and am using"
      },
      {
        name: "Unsplash",
        image: <img src={unsplashImg} alt="Unsplash" width="20" height="20" />,
        link: "https://unsplash.com/",
        checkMark: true,
        description: "Highly recommended, open source free, user friendly and am using"
      },
      {
        name: "Pixabay",
        image: <img src={pixabayImg} alt="Pixabay" width="20" height="20" />,
        link: "https://pixabay.com/",
        checkMark: false
      },
      {
        name: "WallpapersHome",
        image: <img src={wallpapersHomeImg} alt="WallpapersHome" width="20" height="20" />,
        link: "https://unsplash.com/",
        checkMark: false
      },
      {
        name: "iStockPhoto",
        image: <img src={iStockPhotoImg} alt="iStockPhoto" width="20" height="20" />,
        link: "https://www.istockphoto.com/",
        checkMark: false
      }
    ]
  }
];

const illustrationTools = [
  {
    label: "Illustration",
    items: [
      {
        name: "unDraw",
        image: <img src={undrawImg} alt="unDraw" width="20" height="20" />,
        link: "https://undraw.co/",
        checkMark: true,
        description: "Highly recommended, open source free, user friendly and am using"
      },
      {
        name: "Freepik",
        image: <img src={freepikImg} alt="Freepik" width="20" height="20" />,
        link: "https://www.freepik.com/vectors/illustrations",
        checkMark: false
      },
      {
        name: "IconScout",
        image: <img src={iconscoutImg} alt="IconScout" width="20" height="20" />,
        link: "https://iconscout.com/free-illustrations",
        checkMark: false
      }
    ]
  }
];

export const Resources = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Resources | code.papu</title>
          <meta name="description" content="code.papu" />
          <link rel="icon" href={logocodepapu} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Software & Tools</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            {[...onlineCodingPatfroms, ...offlineWhiteboard, ...erDiagram, ...freeHosting, ...paidHosting, 
              ...noteTaking, ...uxDesign, ...websiteBuilder, ...codeToImage, ...backgroundRemover, ...videoEditing]
              .map((section, index) => (
                <div key={index} className="mb-4">
                  <h4 className="color_sec py-4">{section.label}</h4>
                  <div className="d-flex flex-wrap justify-content-start" style={{ flexWrap: "nowrap", overflowX: "auto" }}>
                    {section.items.map((item, idx) => (
                      <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline-secondary"
                          className="m-2"
                          style={{ minWidth: "150px", whiteSpace: "nowrap" }}
                        >
                          <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>
                            {item.image}
                          </span>
                          {item.name}
                          {item.checkMark && (
                            <i className="bi bi-check-circle-fill px-1 highly-recommended" 
                              title="Highly recommended, open source free, user-friendly and am using">
                            </i>
                          )}
                          <i className="bi bi-arrow-right-circle-fill" style={{ marginLeft: "10px" }}></i>
                        </Button>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
          </Col>
        </Row>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">UI Resources</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            {[...colorPickerTools, ...iconTools, ...fontTools, ...chartTools, ...stockImageTools, 
              ...illustrationTools]
              .map((section, index) => (
                <div key={index} className="mb-4">
                  <h4 className="color_sec py-4">{section.label}</h4>
                  <div className="d-flex flex-wrap justify-content-start" style={{ flexWrap: "nowrap", overflowX: "auto" }}>
                    {section.items.map((item, idx) => (
                      <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline-secondary"
                          className="m-2"
                          style={{ minWidth: "150px", whiteSpace: "nowrap" }}
                        >
                          <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>
                            {item.image}
                          </span>
                          {item.name}
                          {item.checkMark && (
                            <i className="bi bi-check-circle-fill px-1 highly-recommended" 
                              title="Highly recommended, open source free, user-friendly and am using">
                            </i>
                          )}
                          <i className="bi bi-arrow-right-circle-fill" style={{ marginLeft: "10px" }}></i>
                        </Button>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
