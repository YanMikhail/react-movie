# ![](./src/assets/images/react-movie-logo.svg)

Учебный проект в рамках React-интенсива компании Aston

### Реализованы следующие требования к функциональности:

### React

- Функциональные компоненты с хуками в приоритете над классовыми
- Есть четкое разделение на умные и глупые компоненты
- Есть рендеринг списков [HomePage](./src/pages/HomePage/HomePage.jsx), [FavouritesPage](./src/pages/Favourites/Favourites.jsx), [History](./src/pages/History/History.jsx)
- Реализована хотя бы одна форма [Form](./src/components/Form.jsx)
- Есть применение Context API [ThemeContext](./src/store/themeContext.js)
- Есть применение предохранителя [ErrorBoundary](./src/components/ErrorBoundary/ErrorBoundary.jsx)
- Есть хотя бы один кастомный хук [useDebounce](./src/hooks/useDebounce.js), [useAuth](./src/hooks/useAuth.js)
- Хотя бы несколько компонентов используют PropTypes [FilmCard](./src/components/ui/FilmCard/FilmCard.jsx), [Form](./src/components/Form.jsx)
- Поиск не должен триггерить много запросов к серверу

### Redux

- Используем Modern Redux with Redux Toolkit [store](./src/store)
- Используем слайсы [favouriteSlice](./src/store/favouriteSlice.js), [historySlice](./src/store/historySlice.js), [userSlice](./src/store/userSlice.js),
- Есть хотя бы одна кастомная мидлвара [localStorageMiddleware](./src/store/middleware/localStorageMiddleware.js)
- Используется RTK Query [movieApi](./src/store/movieApi.js)
- Используется Transforming Responses [movieApi](./src/store/movieApi.js)