document.addEventListener('DOMContentLoaded', function () {
    const menus = {
        Monday: {
            Breakfast: 'Idly, Bajji',
            BreakfastImg: [
                'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=60'
            ],
            Lunch: 'Aloo65, pappu, sambar, rice',
            LunchImg: [
                'https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1526318472351-c75fcf0703d8?auto=format&fit=crop&w=800&q=60'
            ],
            Dinner: 'Parota, Curd rice',
            DinnerImg: [
                'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1481931715705-36f3b9f7c3b5?auto=format&fit=crop&w=800&q=60'
            ],
            Snacks: 'Noodles',
            SnacksImg: [
                'https://images.unsplash.com/photo-1514516870922-3f8a3b6e2a2f?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=800&q=60'
            ]
        },
        Tuesday: {
            Breakfast: 'Idly, Uggani',
            BreakfastImg: [
                'https://images.unsplash.com/photo-1512058564366-c9e3d0db9d6f?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=60'
            ],
            Lunch: 'Pappu, Mealmaker',
            LunchImg: [
                'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=800&q=60'
            ],
            Dinner: 'Friedrice',
            DinnerImg: [
                'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1516685018646-549c5a7a9bff?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=60'
            ],
            Snacks: 'Bajji',
            SnacksImg: [
                'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1514516870922-3f8a3b6e2a2f?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=800&q=60'
            ]
        },
        Wednesday: {
            Breakfast: 'Paratha, curd, salad',
            BreakfastImg: [
                'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=60'
            ],
            Lunch: 'Chapati, mix veg curry, dal, rice',
            LunchImg: [
                'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1526318472351-c75fcf0703d8?auto=format&fit=crop&w=800&q=60'
            ],
            Dinner: 'Vegetable pulao, dal fry, salad',
            DinnerImg: [
                'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1481931715705-36f3b9f7c3b5?auto=format&fit=crop&w=800&q=60'
            ],
            Snacks: 'Veg cutlets with mint chutney',
            SnacksImg: [
                'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1514516870922-3f8a3b6e2a2f?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=800&q=60'
            ]
        },
        Thursday: {
            Breakfast: 'Idli, sambar, coconut chutney',
            BreakfastImg: [
                'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1512058564366-c9e3d0db9d6f?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=60'
            ],
            Lunch: 'Rice, chole, bhindi fry',
            LunchImg: [
                'https://images.unsplash.com/photo-1526318472351-c75fcf0703d8?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=60'
            ],
            Dinner: 'Rava dosa, vegetable kurma',
            DinnerImg: [
                'https://images.unsplash.com/photo-1516685018646-549c5a7a9bff?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?auto=format&fit=crop&w=800&q=60'
            ],
            Snacks: 'Sweet corn soup and toast',
            SnacksImg: [
                'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1514516870922-3f8a3b6e2a2f?auto=format&fit=crop&w=800&q=60'
            ]
        },
        Friday: {
            Breakfast: 'Veg sandwich, milkshake',
            BreakfastImg: [
                'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=800&q=60'
            ],
            Lunch: 'Chapati, aloo gobi, dal, rice',
            LunchImg: [
                'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=800&q=60'
            ],
            Dinner: 'Masala khichdi, curd, salad',
            DinnerImg: [
                'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1516685018646-549c5a7a9bff?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60'
            ],
            Snacks: 'Fruit chaat',
            SnacksImg: [
                'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1514516870922-3f8a3b6e2a2f?auto=format&fit=crop&w=800&q=60'
            ]
        },
        Saturday: {
            Breakfast: 'Idiyappam, stew, tea',
            BreakfastImg: [
                'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=60'
            ],
            Lunch: 'Rice, palak paneer, dal',
            LunchImg: [
                'https://images.unsplash.com/photo-1526318472351-c75fcf0703d8?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=60'
            ],
            Dinner: 'Chapati, mixed vegetable curry, raita',
            DinnerImg: [
                'https://images.unsplash.com/photo-1481931715705-36f3b9f7c3b5?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=60'
            ],
            Snacks: 'Grilled corn and masala chai',
            SnacksImg: [
                'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1514516870922-3f8a3b6e2a2f?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60'
            ]
        },
        Sunday: {
            Breakfast: 'Puri, aloo curry, lassi',
            BreakfastImg: [
                'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1512058564366-c9e3d0db9d6f?auto=format&fit=crop&w=800&q=60'
            ],
            Lunch: 'Rice, dal makhani, veg pulao, salad',
            LunchImg: [
                'https://images.unsplash.com/photo-1546069901-eacef0df6022?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1526318472351-c75fcf0703d8?auto=format&fit=crop&w=800&q=60'
            ],
            Dinner: 'Chapati, kadhi, bhindi fry',
            DinnerImg: [
                'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1516685018646-549c5a7a9bff?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=60'
            ],
            Snacks: 'Pakoras with mint chutney',
            SnacksImg: [
                'https://images.unsplash.com/photo-1514516870922-3f8a3b6e2a2f?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=800&q=60',
                'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=800&q=60'
            ]
        }
    };

    const dayList = document.getElementById('dayList');
    const dayItems = Array.from(document.querySelectorAll('.day-item'));
    const breakfastEl = document.getElementById('breakfastContent');
    const lunchEl = document.getElementById('lunchContent');
    const dinnerEl = document.getElementById('dinnerContent');
    const snacksEl = document.getElementById('snacksContent');
    
    // Lightbox elements
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    // Lightbox open function
    function openLightbox(src) {
        if (!lightbox || !lightboxImg) return;
        lightboxImg.src = src;
        lightbox.classList.add('show');
    }

    // Lightbox close logic
    if (lightboxClose && lightbox) {
        lightboxClose.addEventListener('click', () => lightbox.classList.remove('show'));
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) lightbox.classList.remove('show');
        });
    }

    function renderDay(day) {
        const data = menus[day];
        if (!data) return;
        breakfastEl.textContent = data.Breakfast;
        lunchEl.textContent = data.Lunch;
        dinnerEl.textContent = data.Dinner;
        if (snacksEl) snacksEl.textContent = data.Snacks || '';

        const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];

        mealTypes.forEach(meal => {
            const container = document.querySelector(`.meal-card[data-meal="${meal}"] .meal-image`);
            if (!container) return;
            container.innerHTML = '';
            
            const images = data[`${meal}Img`] || [];
            
            images.forEach((imgSrc, index) => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = meal;
                if (index === 0) img.classList.add('active');
                
                // Add click listener for lightbox
                img.addEventListener('click', () => {
                    openLightbox(imgSrc);
                });
                
                container.appendChild(img);
            });
        });
    }

    const mobileDaySelect = document.getElementById('mobileDaySelect');

    dayList.addEventListener('click', (e) => {
        const li = e.target.closest('.day-item');
        if (!li) return;
        dayItems.forEach(i => i.classList.remove('active'));
        li.classList.add('active');
        const day = li.dataset.day;
        if (mobileDaySelect) mobileDaySelect.value = day;
        renderDay(day);
    });

    if (mobileDaySelect) {
        mobileDaySelect.addEventListener('change', (e) => {
            const day = e.target.value;
            dayItems.forEach(i => {
                if (i.dataset.day === day) i.classList.add('active');
                else i.classList.remove('active');
            });
            renderDay(day);
        });
    }

    // Initial render
    renderDay('Monday');

    // Auto slideshow logic
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
