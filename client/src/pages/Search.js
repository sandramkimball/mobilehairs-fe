import React from 'react'
import Card from '../components/Card'
import FilterBar from '../components/FilterBar'
import './Search.scss'

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sortBy: 'Newest',
            vehicles: [{
                make: 'Dodge',
                model: 'Ram 1500',
                year: 2004,
                body: 'truck',
                engine: '6 Cyl',
                drive: 'RWD',
                miles: 30000,
                color: 'blue',
                price: 12000,
                images: [],
                tags: ['off-road'],
                description: 'New brakes, shocks, transmission, front fender, left headlight.'
            }]
        };
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect = e => {
        this.setState({sortBy: e.target.value})
    }

    componentDidMount(){
        console.log('props in search pg', this.props)
    }

    render(){
        return (
            <section className='search-pg'>
                <div className='banner-s'></div>
                    <div className='search-container'>
                        <FilterBar vehicles={this.state.vehicles}/>
                        <div className='results-container'>
                            <div className='sort-by'>
                                <p>Sort By: </p>
                                <select onChange={this.handleSelect} value={this.props.sortBy}>
                                    <option value={'Newest'}>Newest</option>
                                    <option value={'Year (Asc)'}>Year (Ascending)</option>
                                    <option value={'Year (Desc)'}>Year (Descending)</option>
                                    <option value={'Price (Asc)'}>Price (Ascending)</option>
                                    <option value={'Price (Desc)'}>Price (Descending)</option>
                                </select>
                            </div>
                        {this.state.vehicles.map(car=> (
                            <Card car={car}/>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}

export default Search;