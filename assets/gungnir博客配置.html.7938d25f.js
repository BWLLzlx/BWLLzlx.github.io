import{_ as n,o as s,c as a,a as e}from"./app.4afcc58d.js";const t={},p=e(`<h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u8BE6\u60C5\u8BBF\u95EE\u5B98\u7F51\uFF1Ahttps://v2-vuepress-theme-gungnir.vercel.app/</p><h3 id="\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u6B65\u9AA4" aria-hidden="true">#</a> \u6B65\u9AA4</h3><ol><li><p>\u521B\u5EFA\u9879\u76EE</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> blog <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> blog
<span class="token function">npm</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5B89\u88C5 VuePress \u548C\u4E3B\u9898 Gungnir\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> vuepress@2.0.0-beta.49 vuepress-theme-gungnir@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>49\u7248\u672C\u4EE5\u540E\u53BB\u9664\u4E86theme API layouts\uFF0C\u4E0D\u8981\u4F7F\u7528</p></li><li><p>\u6DFB\u52A0npm\u811A\u672C</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs --clean-cache&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs --clean-cache&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5728\u3010\u6839\u76EE\u5F55/docs/.vuepress/config.js\u4E2D\u8FDB\u884C\u914D\u7F6E\u3011</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// .vuepress/config.js

const { gungnirTheme } = require(&quot;vuepress-theme-gungnir&quot;);

module.exports = {
  ...
  theme: gungnirTheme({
    // \u4E3B\u9898\u5177\u4F53\u914D\u7F6E
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784" aria-hidden="true">#</a> \u7ED3\u6784</h3><h4 id="\u9996\u9875" tabindex="-1"><a class="header-anchor" href="#\u9996\u9875" aria-hidden="true">#</a> \u9996\u9875</h4><p>\u5148\u770Bpackage.json\uFF0Cdev\u7684\u8BED\u53E5\u662F\u3010vuepress dev docs\u3011\uFF0C\u8FD9\u4E2Adocs\u5C31\u662F\u6839\u76EE\u5F55\u4E0B\u7684docs\u76EE\u5F55\uFF0C\u8868\u793A\u53D6\u8FD9\u4E2A\u76EE\u5F55\u4F5C\u4E3A\u3010/\u3011\uFF0C\u6240\u4EE5\u901A\u5E38docs\u76EE\u5F55\u4E2D\u7684README.md\u7528\u4E8E\u914D\u7F6E\u9996\u9875</p><h4 id="\u5176\u4ED6\u535A\u5BA2\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u535A\u5BA2\u6587\u4EF6" aria-hidden="true">#</a> \u5176\u4ED6\u535A\u5BA2\u6587\u4EF6</h4><p>\u5728docs\u76EE\u5F55\u4E0B\u7684\u5404\u4E2A\u76EE\u5F55\u4E2D</p><h2 id="\u5177\u4F53\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5177\u4F53\u914D\u7F6E" aria-hidden="true">#</a> \u5177\u4F53\u914D\u7F6E</h2><p>config.js\u4E2D\u7684\u5177\u4F53\u914D\u7F6E</p><h3 id="\u9876\u680F\u5DE6\u4FA7\u540D\u79F0" tabindex="-1"><a class="header-anchor" href="#\u9876\u680F\u5DE6\u4FA7\u540D\u79F0" aria-hidden="true">#</a> \u9876\u680F\u5DE6\u4FA7\u540D\u79F0</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">navbarTitle</span><span class="token operator">:</span> <span class="token string">&quot;Gungnir&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u9876\u680F\u53F3\u4FA7\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u9876\u680F\u53F3\u4FA7\u9009\u9879" aria-hidden="true">#</a> \u9876\u680F\u53F3\u4FA7\u9009\u9879</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;\u9996\u9875&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Tags&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/tags/&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Links&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/links/&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Docs&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/docs/basic/intro.md&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4FA7\u680F\u9690\u85CF" tabindex="-1"><a class="header-anchor" href="#\u4FA7\u680F\u9690\u85CF" aria-hidden="true">#</a> \u4FA7\u680F\u9690\u85CF</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">catalog</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>		<span class="token comment">//\u5BF9\u6240\u6709\u535A\u5BA2\u6587\u7AE0\u9875\u542F\u7528\u6216\u7981\u7528\u76EE\u5F55\u3002\u53EF\u4EE5\u5728\u535A\u5BA2\u6587\u7AE0\u9875\u7684 front matter \u91CC\u8986\u5199\u8FD9\u4E2A\u914D\u7F6E</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u9996\u9875\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#\u9996\u9875\u56FE\u7247" aria-hidden="true">#</a> \u9996\u9875\u56FE\u7247</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token literal-property property">homeHeaderImages</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// \u56FE 1</span>
    <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/img/home-bg/1.png&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;mask&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgba(40, 57, 101, .4)&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u56FE 2</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9996\u9875\u4E2A\u4EBA\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u9996\u9875\u4E2A\u4EBA\u4FE1\u606F" aria-hidden="true">#</a> \u9996\u9875\u4E2A\u4EBA\u4FE1\u606F</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">personalInfo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5FC5\u987B\uFF1A\u540D\u79F0\uFF0C\u5C06\u5728\u9996\u9875\u3001\u79FB\u52A8\u7AEF\u4FA7\u8FB9\u680F\u548C\u6587\u7AE0\u4F5C\u8005\u4FE1\u606F\u5904\u663E\u793A</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;BWLLzlx&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5FC5\u987B\uFF1A\u5934\u50CF\uFF0C\u5C06\u5728\u9996\u9875\u548C\u79FB\u52A8\u7AEF\u4FA7\u8FB9\u680F\u663E\u793A</span>
    <span class="token literal-property property">avatar</span><span class="token operator">:</span> <span class="token string">&quot;/img/avatar.png&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5FC5\u987B\uFF1A\u4E2A\u4EBA\u7B80\u4ECB\uFF0C\u5C06\u5728\u9996\u9875\u663E\u793A</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&quot;\u8FD9\u662F\u6211\u7684\u4E2A\u4EBA\u535A\u5BA2&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9996\u9875\u535A\u5BA2\u6570\u91CF" tabindex="-1"><a class="header-anchor" href="#\u9996\u9875\u535A\u5BA2\u6570\u91CF" aria-hidden="true">#</a> \u9996\u9875\u535A\u5BA2\u6570\u91CF</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">blogNumPerPage</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6807\u7B7E\u9875\u3001\u94FE\u63A5\u9875\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E\u9875\u3001\u94FE\u63A5\u9875\u914D\u7F6E" aria-hidden="true">#</a> \u6807\u7B7E\u9875\u3001\u94FE\u63A5\u9875\u914D\u7F6E</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">pages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6807\u7B7E\u9875\u914D\u7F6E</span>
    <span class="token literal-property property">tags</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u53EF\u9009\uFF1A\u6807\u7B7E\u9875\u526F\u6807\u9898</span>
        <span class="token literal-property property">subtitle</span><span class="token operator">:</span> <span class="token string">&#39;\u543C\u54C7\u670B\u53CB\u4EEC\uFF0C\u8FD9\u662F\u6807\u7B7E\u9875&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u53EF\u9009\uFF1A\u6807\u7B7E\u9875\u5C01\u9762\u56FE\u8DEF\u5F84\u548C\u8499\u7248</span>
        <span class="token literal-property property">bgImage</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/img/home-bg/1.png&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">mask</span><span class="token operator">:</span> <span class="token string">&#39;rgba(211, 136, 37, .5)&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// \u94FE\u63A5\u9875\u914D\u7F6E</span>
    <span class="token literal-property property">links</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u53EF\u9009\uFF1A\u94FE\u63A5\u9875\u526F\u6807\u9898</span>
        <span class="token literal-property property">subtitle</span><span class="token operator">:</span> <span class="token string">&#39;\u543C\u54C7\u670B\u53CB\u4EEC\uFF0C\u8FD9\u662F\u94FE\u63A5\u9875&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u53EF\u9009\uFF1A\u94FE\u63A5\u9875\u5C01\u9762\u56FE\u8DEF\u5F84\u548C\u8499\u7248</span>
        <span class="token literal-property property">bgImage</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/img/home-bg/1.png&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">mask</span><span class="token operator">:</span> <span class="token string">&#39;rgba(64, 118, 190, 0.5)&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E95\u680F\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5E95\u680F\u914D\u7F6E" aria-hidden="true">#</a> \u5E95\u680F\u914D\u7F6E</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
          Powered by &lt;a href=&quot;https://v2.vuepress.vuejs.org&quot; target=&quot;_blank&quot;&gt;VuePress&lt;/a&gt; &amp;
          &lt;a href=&quot;https://github.com/Renovamen/vuepress-theme-gungnir&quot; target=&quot;_blank&quot;&gt;Gungnir&lt;/a&gt;
        </span><span class="token template-punctuation string">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="front-matter" tabindex="-1"><a class="header-anchor" href="#front-matter" aria-hidden="true">#</a> front matter</h2><p>\u7528\u4E8E\u8BBE\u7F6E\u6BCF\u4E2Amd\u6587\u4EF6\u600E\u4E48\u88AB\u8F6C\u6210\u9875\u9762</p><h3 id="\u5E38\u7528\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u914D\u7F6E" aria-hidden="true">#</a> \u5E38\u7528\u914D\u7F6E</h3><ul><li><p>layout\uFF1A\u7528\u4E8E\u544A\u8BC9vuepress\u628A\u8FD9\u4E2Amd\u6587\u4EF6\u653E\u5230\u4EC0\u4E48\u6A21\u677F\u7684\u9875\u9762\u4E2D\u3002\u5177\u4F53\u6709\u4EC0\u4E48\u53EF\u4EE5\u9009\u62E9\u7684\uFF0C\u5230<strong>vuepress-theme-gungnir\u2014\u2014lib\u2014\u2014client\u2014\u2014layouts\u4E2D</strong>\u67E5\u770B</p><ul><li>HomePage\uFF1A\u9996\u9875</li><li>Post\uFF1A\u666E\u901A\u535A\u5BA2\u9875</li><li>Links\uFF1A\u5916\u90E8\u94FE\u63A5\u9875</li></ul></li><li><p>home\uFF1A\u8868\u793A\u8FD9\u4E2A\u662F\u9996\u9875\u3002\u70B9\u51FB\u9876\u680F\u5DE6\u4E0A\u89D2\u4F1A\u5230\u8FD9\u91CC</p></li><li><p>title\uFF1A\u6807\u9898\uFF0C\u540C\u65F6\u4F1A\u51FA\u73B0\u5728\u6D4F\u89C8\u5668\u7684\u6807\u7B7E\u4E2D</p></li><li><p>subtitle\uFF1A\u526F\u6807\u9898</p></li><li><p>date\uFF1Ayyyy-MM-dd\uFF0C\u535A\u5BA2\u53D1\u8868\u65E5\u671F</p></li><li><p>author\uFF1A\u4F5C\u8005\uFF0C\u4E0D\u586B\u7684\u8BDD\u9ED8\u8BA4\u662Fconfig\u4E2D\u7684personalInfo.name\u5C5E\u6027</p></li><li><p>useHeaderImage\uFF1A\u662F\u5426\u5728\u5F53\u524D\u535A\u5BA2\u4E2D\u663E\u793A\u5C01\u9762</p></li><li><p>headerImage\uFF1A\u5F53\u524D\u535A\u5BA2\u7684\u5C01\u9762\u56FE</p></li><li><p>catalog\uFF1A\u662F\u5426\u7981\u7528\u4FA7\u680F\uFF0C\u9ED8\u8BA4true</p></li><li><p>giscus\uFF1A\u662F\u5426\u7981\u7528\u8BC4\u8BBA\uFF0C\u9ED8\u8BA4true</p></li><li><p>hide\uFF1A\u662F\u5426\u5728\u9996\u9875\u548C\u6807\u7B7E\u9875\u5217\u8868\u4E2D\u9690\u85CF\u5F53\u524D\u535A\u5BA2</p></li><li><p>tags\uFF1A\u6DFB\u52A0\u65B9\u5F0F\uFF0C\u5728\u4E0B\u9762\u52A0\u4E0A\u3010-\u3011\u7136\u540E\u7A7A\u4E00\u683C\uFF0C\u5199\u4E0Atag\u540D</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>tags:
	<span class="token list punctuation">-</span> a
	<span class="token list punctuation">-</span> b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="\u9996\u9875\u914D\u7F6E\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u9996\u9875\u914D\u7F6E\u4F8B\u5B50" aria-hidden="true">#</a> \u9996\u9875\u914D\u7F6E\u4F8B\u5B50</h3><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">layout</span><span class="token punctuation">:</span> HomePage
<span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> \u9996\u9875</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u535A\u5BA2\u9875\u914D\u7F6E\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u535A\u5BA2\u9875\u914D\u7F6E\u4F8B\u5B50" aria-hidden="true">#</a> \u535A\u5BA2\u9875\u914D\u7F6E\u4F8B\u5B50</h3><h4 id="\u94FE\u63A5\u9875" tabindex="-1"><a class="header-anchor" href="#\u94FE\u63A5\u9875" aria-hidden="true">#</a> \u94FE\u63A5\u9875</h4><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">layout</span><span class="token punctuation">:</span> Links
<span class="token key atrule">title</span><span class="token punctuation">:</span> Links
<span class="token key atrule">links</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Live Demos
    <span class="token key atrule">items</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">sitename</span><span class="token punctuation">:</span> ME<span class="token punctuation">?</span>
        <span class="token key atrule">url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//blog.zxh.io
        <span class="token key atrule">img</span><span class="token punctuation">:</span> /img/links/me.png
        <span class="token key atrule">desc</span><span class="token punctuation">:</span> My blog
        
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Other Versions
    <span class="token key atrule">items</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">sitename</span><span class="token punctuation">:</span> VuePress 1
        <span class="token key atrule">url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//vuepress<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>gungnir.vercel.app
        <span class="token key atrule">img</span><span class="token punctuation">:</span> /img/links/v1.svg
        <span class="token key atrule">desc</span><span class="token punctuation">:</span> VuePress 1 theme
      <span class="token punctuation">-</span> <span class="token key atrule">sitename</span><span class="token punctuation">:</span> Jekyll
        <span class="token key atrule">url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//jekyll<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>gungnir.vercel.app
        <span class="token key atrule">img</span><span class="token punctuation">:</span> /img/links/jekyll.png
        <span class="token key atrule">desc</span><span class="token punctuation">:</span> Jekyll theme</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u535A\u5BA2\u9875" tabindex="-1"><a class="header-anchor" href="#\u535A\u5BA2\u9875" aria-hidden="true">#</a> \u535A\u5BA2\u9875</h4><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">layout</span><span class="token punctuation">:</span> Post
<span class="token key atrule">title</span><span class="token punctuation">:</span> \u6D4B\u8BD53
<span class="token key atrule">subtitle</span><span class="token punctuation">:</span> \u6D4B\u8BD5\u4E0B
<span class="token key atrule">author</span><span class="token punctuation">:</span> BWLLzlx
<span class="token key atrule">date</span><span class="token punctuation">:</span> 2023<span class="token punctuation">-</span>3<span class="token punctuation">-</span><span class="token number">16</span>
<span class="token key atrule">headerImage</span><span class="token punctuation">:</span> /img/home<span class="token punctuation">-</span>bg/1.png
<span class="token key atrule">&lt;!-- tags</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> css
  <span class="token punctuation">-</span> test <span class="token punctuation">-</span><span class="token punctuation">-</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38),i=[p];function l(o,r){return s(),a("div",null,i)}var u=n(t,[["render",l],["__file","gungnir\u535A\u5BA2\u914D\u7F6E.html.vue"]]);export{u as default};
