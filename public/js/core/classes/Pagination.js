'use strict';

import Data2HTML from '/public/js/core/classes/Data2HTML.js';

class Pagination {
    // init
    static async init() {
        let pagination = document.querySelector('.pagination');
        let prevButton = document.querySelector('.pagination .prev');
        let nextButton = document.querySelector('.pagination .next');

        let totalPages = pagination.dataset.totalPages;

        prevButton.onclick = async () => {
            let currentPage = Pagination.getCurrentPage();

            if (currentPage-1 < 1) return;

            await Pagination.getPage(--currentPage);
            Pagination.setPage(currentPage);
        };

        nextButton.onclick = async () => {
            let currentPage = Pagination.getCurrentPage();

            if (currentPage+1 > totalPages) return;

            await Pagination.getPage(++currentPage);
            Pagination.setPage(currentPage)
        };

        let currentPage = Pagination.getCurrentPage();
        await Pagination.getPage(currentPage);
        Pagination.setPage(currentPage);
    }

    // 
    static setPage(page) {
        if (page === 1) {
            history.pushState(null, null, `${location.origin}${location.pathname}`);
        } else {
            history.pushState(null, null, `${location.origin}${location.pathname}?page=${page}`);
        }

        document.querySelector('.current_page').textContent = page;
    }

    static async getPage(index) {
        let totalPages = document.querySelector('.pagination').dataset.totalPages;

        if (index < 1 || index > totalPages) return;

        let request = await fetch(`${location.origin}/public/data/${index}.json`);
        if (request.status === 404) return;
        
        let response = await request.json();

        let html = Data2HTML.stories(response);

        let storiesHTML = document.querySelector('.stories');
        storiesHTML.clear().insertAdjacentHTML('afterbegin', html);
    }

    static getCurrentPage() {
        return new URLSearchParams(document.location.search).get('page') || 1;
    }

    static onpopstate() {
        window.addEventListener('popstate', () => {
            let currentPage = Pagination.getCurrentPage();
            console.log(currentPage);
            getPage(currentPage);
        });
    }
}

export default Pagination;