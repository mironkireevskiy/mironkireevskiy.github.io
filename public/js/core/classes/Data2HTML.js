'use strict';

import '/public/js/core/services/suffix.js';
import '/public/js/core/services/escape_string.js';

class Data2HTML {
    static stories(data) {
        let response = data.reduce((accum, story) => {
            let name = (story.name === null) ? '<Без названия>'.escape_string() : story.name;

            accum += `
<section class="story">
    <h2 itemprop="headline">
	<a href="/${story.path}/">${name}</a>
</h2>
	<span>Размер: ${story.count_words} ${parseInt(story.count_words).suffix('word')}</span>
	<span>Автор: ${story.author}</span>
	<p>${story.annotation}… <a href="/${story.path}/" title="Перейти к рассказу">читать далее</a></p>
</section>
<hr>
`.trim();

            return accum;
        }, '');

        return response.slice(0, -5);
    }
}

export default Data2HTML;