document.addEventListener('DOMContentLoaded', function () {

    /* ========================================================
       REAL MENU DATA — Source of truth from physical menu cards
       ======================================================== */
    const menus = {
        Monday: {
            Breakfast: [
                'Ghee Karam Dosa', 'Masala Dosa', 'Idly', 'Ghee Karampodi',
                'Allam Chutney', 'Pappulu Podi', 'Minapa Punugulu'
            ],
            Lunch: [
                'Tomato Pappu', 'Gongora Roti Pachadi', 'Fry', 'Curry',
                'Sambar', 'Rasam', 'Curd', 'Rice'
            ],
            Snacks: [
                'Onion Pakodi', 'Masala Gaari', 'Thotakura Pakodi'
            ],
            Dinner: [
                'Egg Biryani', 'Parota', 'Chicken Sheruva', 'Veg Sheruva',
                'Zeera Rice', 'Tomato Rice'
            ]
        },
        Tuesday: {
            Breakfast: [
                'Puri', 'Idly', 'Curry', 'Sambar', 'Allam Chutney', 'Palli Chutney'
            ],
            Lunch: [
                'Palakora Pappu', 'Tomato Roti Pachadi', 'Amla Pickle', 'Fry',
                'Curry', 'Sambar', 'Rasam', 'Curd', 'Chips', 'Rice'
            ],
            Snacks: [
                'Egg Noodles', 'Veg Noodles', 'Manchuriya', 'Maggi'
            ],
            Dinner: [
                'Chicken Fried Rice', 'Veg Paneer Fried Rice', 'Raita'
            ]
        },
        Wednesday: {
            Breakfast: [
                'Vegetable Uttappam', 'Idly', 'Chutney', 'Allam Chutney',
                'Tomato Chutney'
            ],
            Lunch: [
                'Gongora Pappu', 'Dosakaya Roti Pachadi', 'Pandu Mirapakaya',
                'Fry', 'Curry', 'Sambar', 'Rasam', 'Curd', 'Rice'
            ],
            Snacks: [
                'Mysorepak', 'Gulabjam', 'Badusha', 'Sweet Boondi'
            ],
            Dinner: [
                'Chicken Fry', 'Dum Biryani', 'Chicken Curry', 'Fish Fry',
                'Fish Curry', 'Katta', 'Raita', 'Rice'
            ]
        },
        Thursday: {
            Breakfast: [
                'Mysore Bajji', 'Idly', 'Tomato Bath', 'Allam and Tomato Chutney',
                'Karampodi'
            ],
            Lunch: [
                'Tomato Pappu', 'Dondakaya Roti Pachadi', 'Fry', 'Curry',
                'Sambar', 'Rasam', 'Curd', 'Rice'
            ],
            Snacks: [
                'Ice Cream', 'Punugu', 'Panipuri', 'Aloo Bajji', 'Banana Bajji'
            ],
            Dinner: [
                'Egg Dosa', 'Pesara Dosa', 'Masala Dosa', 'Onion Dosa',
                'Ghee Karam Podi', 'Pudhina Rice', 'Raita', 'Allam Chutney'
            ]
        },
        Friday: {
            Breakfast: [
                'Tomato Rice', 'Zeera Rice', 'Vegetable Pulao', 'Kothimeera Rice',
                'Coconut Rice', 'Pudina Rice', 'Idly', 'Karampodi', 'Populu',
                'Chutney', 'Nala Karam', 'Palli Podi', 'Coconut Podi'
            ],
            Lunch: [
                'Dosakaya Pappu', 'Mango Pachadi', 'Brinjal Roti Pachadi', 'Fry',
                'Curry', 'Sambar', 'Rasam', 'Curd', 'Rice'
            ],
            Snacks: [
                'Samosa', 'Cutlet', 'Bajji', 'Biscuit', 'Mixture',
                'Dry Fruit Namkeen'
            ],
            Dinner: [
                'Egg Biryani', 'Egg Bujji', 'Egg Curry', 'Omlet',
                'Egg Fried Rice', 'Pappu', 'Sambar', 'Chutney', 'Curd'
            ]
        },
        Saturday: {
            Breakfast: [
                'Gari', 'Sambar', 'Idly', 'Chutney', 'Allam Chutney',
                'Palli Chutney'
            ],
            Lunch: [
                'Mudda Pappu', 'Curd Thalimpu', 'Uppu Mirapayaka',
                'Chintakaya Pachadi', 'Fry', 'Curry', 'Rasam', 'Curd', 'Rice'
            ],
            Snacks: [
                'Seasonal Fruit Salad'
            ],
            Dinner: [
                'Chapathi', 'Mixed Vegetable Curry', 'Palak Paneer',
                'Rajma Curry', 'Chole Curry', 'Banana', 'Curd Rice', 'Polihora'
            ]
        },
        Sunday: {
            Breakfast: [
                'Ravva Upma', 'Tomato Bath', 'Semiya Upma', 'Idly', 'Pongal',
                'Karampodi', 'Allam Chutney', 'Coconut Podi'
            ],
            Lunch: [
                'Chicken Biryani', 'Fry Biryani', 'Dum Biryani', 'Chicken Curry',
                'Chicken Fry', 'Sp. Biryani', 'Chicken Lollipop', 'Katta',
                'Gongora', 'Sheruva', 'Raita', 'Panasakaya Biryani',
                'Mix Biryani', 'Paneer Curry', 'Paneer Biryani',
                'Mushroom Curry', 'Sweet', 'Ice Cream'
            ],
            Snacks: [
                'Semiya Payasam', 'Chakera Pongali'
            ],
            Dinner: [
                'Pappu', 'Sambar', 'Rasam Curry', 'Chips', 'Chutney',
                'Curd', 'Rice'
            ]
        }
    };

    /* ========================================================
       CURATED FOOD IMAGES — Relevant to South Indian cuisine
       ======================================================== */
    const mealImages = {
        Breakfast: [
            'https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=800&q=60'
        ],
        Lunch: [
            'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=60'
        ],
        Snacks: [
            'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1606491956689-2ea866880049?auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&w=800&q=60'
        ],
        Dinner: [
            'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=800&q=60',
            'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60'
        ]
    };

    /* ========================================================
       MEAL METADATA — Icons, labels, timing, accent colors
       ======================================================== */
    const mealMeta = {
        Breakfast: { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>', time: '7:30 – 9:30 AM', accent: 'breakfast' },
        Lunch:     { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>', time: '12:30 – 2:30 PM', accent: 'lunch' },
        Snacks:    { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>', time: '4:30 – 6:00 PM', accent: 'snacks' },
        Dinner:    { icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>', time: '7:30 – 9:30 PM', accent: 'dinner' }
    };

    /* ========================================================
       DOM REFERENCES
       ======================================================== */
    const dayItems = Array.from(document.querySelectorAll('.day-pill'));
    const mobileDaySelect = document.getElementById('mobileDaySelect');
    const mealsContainer = document.getElementById('mealsContainer');
    const selectedDayTitle = document.getElementById('selectedDayTitle');

    // Lightbox elements
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    /* ========================================================
       LIGHTBOX
       ======================================================== */
    function openLightbox(src) {
        if (!lightbox || !lightboxImg) return;
        lightboxImg.src = src;
        lightbox.classList.add('show');
    }

    if (lightboxClose && lightbox) {
        lightboxClose.addEventListener('click', () => lightbox.classList.remove('show'));
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) lightbox.classList.remove('show');
        });
    }

    /* ========================================================
       RENDER DAY — Build meal cards dynamically
       ======================================================== */
    function renderDay(day) {
        const data = menus[day];
        if (!data || !mealsContainer) return;

        // Update title
        if (selectedDayTitle) {
            selectedDayTitle.textContent = day + "'s Menu";
        }

        // Build all 4 meal cards
        const mealOrder = ['Breakfast', 'Lunch', 'Snacks', 'Dinner'];
        let html = '';

        mealOrder.forEach((meal, idx) => {
            const items = data[meal] || [];
            const meta = mealMeta[meal];
            const images = mealImages[meal] || [];

            // Build dish tags
            const tagsHtml = items.map(item =>
                `<span class="dish-tag">${item}</span>`
            ).join('');

            // Build image slides
            const imagesHtml = images.map((src, i) =>
                `<img src="${src}" alt="${meal}" class="${i === 0 ? 'active' : ''}" loading="lazy">`
            ).join('');

            html += `
            <div class="meal-card meal-card--${meta.accent}" data-meal="${meal}" style="animation-delay: ${idx * 0.08}s">
                <figure class="meal-image">
                    ${imagesHtml}
                    <div class="meal-image-overlay"></div>
                    <div class="meal-header-badge">
                        <span class="meal-icon">${meta.icon}</span>
                        <div class="meal-header-text">
                            <h3 class="meal-title">${meal}</h3>
                            <span class="meal-time">${meta.time}</span>
                        </div>
                    </div>
                </figure>
                <div class="meal-body">
                    <div class="dish-count">${items.length} item${items.length !== 1 ? 's' : ''}</div>
                    <div class="dish-tags">
                        ${tagsHtml}
                    </div>
                </div>
            </div>`;
        });

        mealsContainer.innerHTML = html;

        // Attach lightbox click listeners to new images
        mealsContainer.querySelectorAll('.meal-image img').forEach(img => {
            img.addEventListener('click', () => openLightbox(img.src));
        });
    }

    /* ========================================================
       DAY SELECTOR — Desktop pills
       ======================================================== */
    dayItems.forEach(pill => {
        pill.addEventListener('click', () => {
            dayItems.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            const day = pill.dataset.day;
            if (mobileDaySelect) mobileDaySelect.value = day;
            renderDay(day);
        });

        // Keyboard accessibility
        pill.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                pill.click();
            }
        });
    });

    /* ========================================================
       DAY SELECTOR — Mobile dropdown
       ======================================================== */
    if (mobileDaySelect) {
        mobileDaySelect.addEventListener('change', (e) => {
            const day = e.target.value;
            dayItems.forEach(p => {
                if (p.dataset.day === day) p.classList.add('active');
                else p.classList.remove('active');
            });
            renderDay(day);
        });
    }

    /* ========================================================
       AUTO-DETECT TODAY — Highlight current day on load
       ======================================================== */
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = days[new Date().getDay()];

    // Set active pill
    dayItems.forEach(p => {
        if (p.dataset.day === today) p.classList.add('active');
        else p.classList.remove('active');
    });

    // Set mobile select
    if (mobileDaySelect) mobileDaySelect.value = today;

    // Initial render
    renderDay(today);

    /* ========================================================
       IMAGE SLIDESHOW — Rotate images every 3.5s
       ======================================================== */
    setInterval(() => {
        const imageContainers = document.querySelectorAll('.meal-image');
        imageContainers.forEach(container => {
            const images = container.querySelectorAll('img');
            if (images.length <= 1) return;

            let activeIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
            if (activeIndex !== -1) {
                images[activeIndex].classList.remove('active');
            } else {
                activeIndex = 0;
            }

            const nextIndex = (activeIndex + 1) % images.length;
            images[nextIndex].classList.add('active');
        });
    }, 3500);
});
