#### 0.4.0 (2024-11-18)

##### Chores

- delete deprecated code (6f05b117)
- delete context from app (49effc4a)
- add TODO (88809265)
- **store:**
  - add draft to configure store (5926b3b3)
  - add storage.ts to load and save data (a9860c92)

##### New Features

- add util function to get duration (15af2af4)
- add counter of favour films (e59887a1)
- **user.slice:** add user.slice (need to test) (ea751c63)
- **MovieCard:**
  - add/delete WishList (2f8cd391)
  * impl of add/remove from favour (5f9266a3)
  * add util component MovieCard, minimal refactoring (a652f0d6)

#### 0.3.1 (2024-11-13)

##### New Features

- add private route for only auth user (25aa858f)

#### 0.3.0 (2024-11-13)

##### Chores

- add prefix to search request (b5ec193c)

##### New Features

- include MoviePage (492f305f)
- add Loader's support (247a47a9)
- update routes (09340df1)
- impl of requests (mock, real) (9cca891b)

##### Bug Fixes

- **movie card, favoritesPage:** fix design (c3e503b5)
- **MovieCard:** remove useless postfix (d1a05746)
- **searchFilmDescByName:** fix request (f2302a15)

##### Refactors

- add Feedback component (bdfd020c)

#### 0.2.0 (2024-11-08)

##### New Features

- **pages:** minimal changes (907b332b)
- **ErrorPage:** create 404 page (befe169e)
- **Heading:** create util component Heading (acdb5808)
- **MoviePage:** first impl for movie page NB!: has TODO: (fd0fceea)
- intermediate commit (fe990cb3)
- renaming of FilmsPage now MainPage is FilmsPage (779f8182)

##### Bug Fixes

- involved userProvider (b1fa5898)

##### Refactors

- **MenuLayout:** wrap routes into layout (c32fd177)
- **components:**
  - add util SimpleMenuItem (7dfcd9cd)

#### 0.1.3 (2024-11-04)

##### Chores

- **main.tsx:** add only one type (as HTMLElement) (2cfce361)
- **Input, LoginPage:** changes for LoginPage (6346b3f2)
- **FilmsPage:** finish with type, add rule to .hintrc add rule to disable label checking for input form's fields (67adc757)
- **Content:** finish with type (8acad620)
- **context, hooks:** finish with type (need to test) (f093bc28)
- **userContext:** finish with type (af237212)
- **Title:** finish type (d2865cd0)
- **useLocalStorage:** finish types (05173e61)
- **shared:** finish with utils (9eefa3cc)
- **Paragraph:** finish with types (53ca1317)
- **MovieCard:** finish (need to test) (0c181f57)
- **Menu:** finish (need to test) (5514831d)
- **Menu, UserContext:** intermediate commit (32b65d7d)
- **LinkedMenuItem:** finish (need to test) (9309c1f4)
- **Input:**
  - finished with Input need to test (11af3d09)
  - intermediate commit (some problems with forwardRef) (37dfdfbc)
- **Flex:** add FlexProps (9c6ade0c)

##### Documentation Changes

- remove JSDoc, use only ts to show description (0d784844)

##### Bug Fixes

- **index.html, useLocalStorage:** minimal changes app now worked (8471ebde)
- add css-module support (need to test) (ac617337)
- add exports from components and styles for Logo (1ef7abca)

##### Other Changes

- renaming extension of files (60d26ba5)
- now app is broken, because of new cfg files (1ab86c83)

#### 0.1.2 (2024-10-28)

##### New Features

- add UserContext (2e73862a)

##### Bug Fixes

- **useLocalStorage:** now localStorage worked (5b9364ee)

##### Refactors

- **Input:** remove useless useState (1c8bd834)

#### 0.1.1 (2024-10-25)

##### Documentation Changes

- **Input:** describe all parameters of Input (91abf0e0)

##### New Features

- **LoginPage:** impl for login/logout (204d1307)
- **useLocalStorage:** create hook for saving user profile (873c1471)

##### Refactors

- **Search:**
  - replacing Search to Input component element (089880b9)
  - add Input util component (23d0786a)
- **App:** add pages folder with FilmsPage and LoginPage (dcc1850f)

#### 0.1.0 (2024-10-20)

##### Chores

- **\*:** create module css styles (index.module.css) (a9e69139)

##### Bug Fixes

- **Header:** change class 'restrict-content-size ' to global class (da86a871)

##### Refactors

- **Flex, LinkedMenuItem, MovieCard, Search, Header:** refactoring with classnames (de1d05ba)
- **\*:** change path to index.module.css (4f94babc)

#### 0.0.4 (2024-10-18)

##### Refactors

- **components:**
  - minimal code reducing (fce88542)
  - minimal changes in parameters of components (833a166c)

#### 0.0.3 (2024-10-13)

##### New Features

- **MovieCard:** add util component MovieCard, minimal refactoring (a652f0d6)

#### 0.0.2 (2024-08-17)

##### Documentation Changes

- change README.md (37e87b2d)

##### New Features

- demonstrate all components (e46c13cf)
- add Content layout (741fb5f6)
- add Header layout component (2a8edcb2)
- add Menu util components (738ff32e)
- Add Search component (3c2d843f)

##### Bug Fixes

- add exports from components and styles for Logo (1ef7abca)

#### 0.0.1 (2024-08-05)

##### Chores

- fix CHANGELOG.md (c77c22d8)

##### New Features

- Add Paragraph component (8d5ea4fb)
- add Title component (38198954)
- add Button component (037a7129)

#### 0.0.0 (2024-08-05)

##### Refactors

- Init project (b168c41c)
