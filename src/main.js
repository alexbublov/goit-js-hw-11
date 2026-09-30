import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
    timeout: 3000,
    position: 'topRight',
});

const searchForm = document.querySelector('.form');
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const query = searchForm.elements['search-text'].value.trim();
    if (!query) return;
    clearGallery();
    showLoader();
    getImagesByQuery(query)
        .then((response) => {
            createGallery(response.data.hits);
            if (response.data.hits.length === 0) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            }
        })
        .finally(() => {
            hideLoader();
        });
});
