import React, { useCallback, useEffect } from 'react';
import { Categories, PizzaBlock, SortPopup } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import LoadingBlock from '../components/PizzaBlock/LoadingBlock';

const categoryNames = [ 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые' ]
const sortItems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавиту', type: 'name', order: 'asc' }
]

const Home = () => {

    const dispatch = useDispatch()
    const items = useSelector( ( state ) => state.pizzas.items )
    const isLoaded = useSelector( ( state ) => state.pizzas.isLoaded )
    const { category, sortBy } = useSelector( ( state ) => state.filters )

    console.log( category, sortBy )

    useEffect( () => {
        dispatch( fetchPizzas( sortBy, category ) )
    }, [ sortBy, category ] )

    const onSelectCategory = useCallback( ( index ) => {
        dispatch( setCategory( index ) )
    }, [] )

    const onSelectSortType = useCallback( ( type ) => {
        dispatch( setSortBy( type ) )
    }, [] )

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={ category }
                    onClickCategory={ onSelectCategory }
                    items={ categoryNames }/>
                <SortPopup activeSortType={ sortBy.type } items={ sortItems } onClickSortType={ onSelectSortType }/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded
                        ?
                        items.map( ( obj ) => <PizzaBlock key={ obj.id } isLoading={ true } { ...obj }/> )
                        :
                        Array( 10 ).fill( 0 ).map( ( el, index ) => <LoadingBlock key={ index }/> )
                }
            </div>
        </div>
    );
};

export default Home;