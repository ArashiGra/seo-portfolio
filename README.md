# seo-portfolio

## 專案名稱與目的

seo-portfolio 是一個個人 SEO／GEO 作品集專案，用來展示如何把地方搜尋需求、內容企劃、文章資訊架構與基本技術 SEO 整合成可發布的靜態網站。

本專案目前以「嘉義咖啡半日散步路線」作為案例，示範從搜尋意圖出發，建立首頁、文章頁、結構化資料、robots.txt 與 sitemap.xml。

## SEO／GEO 作品集案例說明

此案例聚焦嘉義咖啡廳與半日旅遊情境，目標是回應旅客可能搜尋的長尾需求，例如「嘉義咖啡廳」、「嘉義火車站咖啡廳」、「嘉義半日散步」與「嘉義咖啡路線」。

內容設計重點包含：

- 以旅客情境安排路線，而不是只列店家清單
- 提供完整下午時間軸、兩小時走法與雨天調整
- 在文章中標示店家與館舍資訊仍需以官方最新公告為準
- 使用 BlogPosting 與 BreadcrumbList JSON-LD 協助搜尋引擎理解頁面內容
- 使用 sitemap.xml 與 robots.txt 支援基本爬取與索引流程

## 預定公開網址

首頁預定公開網址：

https://arashigra.github.io/seo-portfolio/

文章預定公開網址：

https://arashigra.github.io/seo-portfolio/article/chiayi-cafes-half-day/

## 專案檔案結構

```text
seo-portfolio/
├── 404.html
├── README.md
├── index.html
├── robots.txt
├── sitemap.xml
├── article/
│   └── chiayi-cafes-half-day/
│       └── index.html
└── assets/
    ├── css/
    │   └── style.css
    ├── images/
    │   ├── article-route-map.png
    │   ├── favicon.svg
    │   ├── home-route-overview.png
    │   └── og-chiayi-cafes.png
    └── js/
        └── main.js
```

## 本機預覽方法

可在專案根目錄執行以下其中一種方式預覽：

```bash
python -m http.server 8000
```

或：

```bash
npx live-server . --port=8000
```

啟動後可開啟：

http://localhost:8000/

## GitHub Pages 部署方式

1. 確認 repository 已推送到 GitHub。
2. 進入 GitHub repository 的 Settings。
3. 選擇 Pages。
4. 在 Build and deployment 中選擇 Deploy from a branch。
5. 選擇要發布的分支與根目錄。
6. 儲存設定後，等待 GitHub Pages 完成部署。
7. 部署完成後，以預定公開網址檢查首頁、文章頁、圖片、CSS、JavaScript、robots.txt 與 sitemap.xml 是否可正常讀取。

## BlogPosting 與 BreadcrumbList JSON-LD 說明

文章頁包含兩段 JSON-LD：

- BlogPosting：描述文章標題、摘要、圖片、發布日期、更新日期、作者、發布者、主頁面網址、關鍵字與語言。
- BreadcrumbList：描述首頁到文章頁的麵包屑層級，協助搜尋引擎理解頁面所在位置。

JSON-LD 只負責提供結構化資料，不代表 Rich Results Test 已通過，也不代表搜尋結果一定會顯示複合式摘要。

## robots.txt 與 sitemap.xml 說明

robots.txt 允許搜尋引擎爬取網站，並提供 sitemap.xml 位置：

```text
User-agent: *
Allow: /
Sitemap: https://arashigra.github.io/seo-portfolio/sitemap.xml
```

sitemap.xml 列出首頁與文章頁網址，協助搜尋引擎發現主要頁面。發布後仍需確認公開網址、lastmod 日期與實際部署狀態一致。

## 發布後檢查步驟

發布到 GitHub Pages 後，建議依序完成以下人工檢查：

1. 開啟首頁與文章頁，確認頁面可讀、版面正常、圖片可載入。
2. 使用 Google Rich Results Test 測試文章頁網址，檢查 BlogPosting 與 BreadcrumbList 是否能被正確讀取。
3. 登入 Google Search Console，新增或確認網站資源。
4. 在 Search Console 提交 sitemap.xml。
5. 使用網址檢查工具檢查首頁與文章頁。
6. 視需要要求建立索引，並等待 Google 處理。
7. 後續回到 Search Console 檢查索引狀態、涵蓋範圍與可能的結構化資料警告。

目前不得聲稱 Rich Results Test 已通過、Search Console 已提交或頁面已索引；這些都必須在正式發布後人工確認。

## 發布後待完成項目

- Google Rich Results Test 驗證
- Google Search Console 提交 sitemap.xml
- URL Inspection 與索引狀態確認
