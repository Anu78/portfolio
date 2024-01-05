import { useEffect, useState } from 'react';
import remark from 'remark';
import remarkHtml from 'remark-html';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';

export default function MarkdownRenderer({ sourceUrl }) {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch(sourceUrl)
            .then(response => response.text())
            .then(markdown => {
                remark()
                    .use(remarkHtml)
                    .process(markdown, (err, file) => {
                        if (err) throw err;
                        setContent(String(file));
                    });
            });
    }, [sourceUrl]);

    useEffect(() => {
        document.querySelectorAll('pre code').forEach(block => {
            hljs.highlightBlock(block);
        });
    }, [content]);

    return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
