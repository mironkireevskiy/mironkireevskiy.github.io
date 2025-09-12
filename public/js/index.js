'use strict';

import '/public/js/core/services/clear.js';

import Pagination from '/public/js/core/classes/Pagination.js';

document.addEventListener('DOMContentLoaded', async () => {
    if (location.pathname === '/') {
        await Pagination.init();
    }
});

Pagination.onpopstate();