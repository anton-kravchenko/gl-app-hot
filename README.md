# Implementation status

- [x] pipe, фильтрация hotels
  - [x] инпут поле - поиск по title и description
  - [x] вместо | Hotel | Fishing | Tours | Weather | - сортировку по звездам (можно All | **\* | \*\*** | **\***) и чтобы они вместе работали
- [x] добавить компоненту favorites hotels
  - [x] данные в app-hotels, на том же уровне где и hotels, selectedHotel
  - [x] отображает список
- [x] в список к каждому элементу добавить кновпу +Add to favorites (можно под двемя картинками в списке)
- [x] при клике на +Add to favorites добавляется элемент в favorites hotels
- [x] удалить элемент из favorites, кликаем на [x] - удаляем hotel из списка favorites
- [x] advanced
  - [x] нотификации
    - [x] 'Добавлено в favorites!'
    - [x] 'Удалено из favorites!'
    - [x] Если элемент уже есть в списке favorites
      - [x] или попап что уже добавлен
      - [] - или считать колличетсво нажатий (voted - IFavoriteHotel расширить полем от IHotel)
- сделать загрузку hotels асинхронной (setTimeout, 3 sec) -
- для advanced - можно сделать спискок this.hotels\$ = of(mockedHotels).pipe(delay(3000))
- для advanced - кастомная директива, навешиваем на hotels list, пока гдузиться сделать оверлей над списком
- Loading... текст вместо директивы - попроще
- подсвечивать четные отели другим цветом (зебра)

# GlAppHot

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
