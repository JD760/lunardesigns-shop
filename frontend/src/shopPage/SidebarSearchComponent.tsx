import "./sidebarSearchComponent.css"

interface SidebarSearchProps {

}

export default function SidebarSearchComponent(props: SidebarSearchProps) {
    return(
        <div className="search-container">
            <input className="searchbar" placeholder="Search..."/>
            <div className="filter-category type-category">
                <p className="filter-category-label">Type</p>
                <input name="whippet" id="whippet" type="checkbox"/>
                <label htmlFor="whippet">Whippet</label>
                <br/>
                <input name="labrador" id="labrador" type="checkbox"/>
                <label htmlFor="labrador">Labrador</label>
                <br/>
                <input name="cat" id="cat" type="checkbox"/>
                <label htmlFor="cat">Cat</label>
            </div>

            <div className="filter-category size-category">
                <p className="filter-category-label">Size </p>
                <input name="small" id="small" type="checkbox"/>
                <label htmlFor="small">7cm</label>
                <br/>
                <input name="medium" id="medium" type="checkbox"/>
                <label htmlFor="medium">9cm</label>
                <br/>
                <input name="large" id="large" type="checkbox"/>
                <label htmlFor="large">11cm</label>
            </div>

            <div className="filter-category style-category">
                <p className="filter-category-label">Style</p>
                <input name="sparkles" id="sparkles" type="checkbox"/>
                <label htmlFor="sparkles">Sparkles</label>
                <br/>
                <input name="flowers" id="flowers" type="checkbox"/>
                <label htmlFor="flowers">Flowers</label>
                <br/>
                <input name="hearts" id="hearts" type="checkbox"/>
                <label htmlFor="hearts">Hearts</label>
            </div>

            <div className="filter-category colour-category">
                <p className="filter-category-label">Colour</p>
                <input name="black" id="black" type="checkbox"/>
                <label htmlFor="black">Black</label>
            </div>

            {/* Reset filter options to default values */}
            <div className="filter-category reset-container">
                <button className="reset-filters">Reset</button>
            </div>
        </div>
    )
}