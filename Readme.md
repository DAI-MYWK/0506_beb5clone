# サンコーネーム サイト

このリポジトリは就労継続支援B型事業所「株式会社サンコーネーム」のサンプルサイトです。

## 主な機能
- ヘッダーの表示・非表示制御
- スムーズスクロール
- 画像の遅延読み込み

## 画像の遅延読み込みについて
`img` タグに `data-src` 属性を指定し、`src` には 1x1 ピクセルのプレースホルダー画像を設定しています。ページ読み込み後、`IntersectionObserver` により `data-src` の値が `src` に移され、画像がロードされます。

```html
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" data-src="img/example.jpg" alt="例">
```

```javascript
if (image.dataset.src) {
    image.src = image.dataset.src;
    image.removeAttribute('data-src');
}
```

## セットアップ
テスト実行には Node.js が必要です。依存関係をインストールして Jest を実行します。

```bash
npm install
npm test
```
