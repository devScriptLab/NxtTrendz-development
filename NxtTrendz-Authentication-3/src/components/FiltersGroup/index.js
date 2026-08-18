import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const onEnterSearchInput = event => {
    const {enterSearchInput} = props

    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div className="search-input-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
          value={searchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const renderCategoriesList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = props
      const onClickCategoryItem = () => changeCategory(category.categoryId)
      const isActive = activeCategoryId === category.categoryId
      const categoryClassName = isActive
        ? 'category-name active-category-name'
        : 'category-name'

      return (
        <li
          className="category-item"
          key={category.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })
  }

  const renderProductCategories = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">{renderCategoriesList()}</ul>
    </>
  )

  const renderRatingsFiltersList = () => {
    const {ratingsList, activeRatingId} = props

    return ratingsList.map(rating => {
      const {changeRating} = props

      const onClickRating = () => changeRating(rating.ratingId)

      const andUpClassName =
        activeRatingId === rating.ratingId ? 'and-up active-rating' : 'and-up'

      return (
        <li
          key={rating.ratingId}
          className="rating-item"
          onClick={onClickRating}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-image"
          />
          <p className={andUpClassName}>& up</p>
        </li>
      )
    })
  }

  const renderRatingsFilters = () => (
    <>
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">{renderRatingsFiltersList()}</ul>
    </>
  )

  const onClearFilter = () => {
    const {clearFilters} = props
    clearFilters()
  }

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategories()}
      {renderRatingsFilters()}
      <button
        type="button"
        className="clear-filters-btn"
        onClick={onClearFilter}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
