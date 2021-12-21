const createFilter = (details) => {
    const filter = document.querySelector('.filter_vehicles');
        const div = `
        <div class="vehicles_types">
        <span>
            All nations
            <article>
            <span>U.S.S.R.</span>
            <span>Germany</span>
            <span>U.S.A.</span>
            <span>France</span>
            <span>United Kingdom</span>
            <span>China</span>
            <span>Japan</span>
            <span>Czechoslovakia</span>
            <span>Sweden</span>
            <span>Poland</span>
        </article>
        </span>
        
        <span>
            All types
            <article>
            <span>Light tanks</span>
            <span>Medium tanks</span>
            <span>Heavy tanks</span>
            <span>Tank destroyer</span>
        </article>
        </span>
        <span>
            I-X All Tiers
            <article>
                <span>Tier II</span>
                <span>Tier III</span>
                <span>Tier IV</span>
                <span>Tier V</span>
                <span>Tier VI</span>
                <span>Tier VII</span>
                <span>Tier VIII</span>
            </article>
        </span>
    </div>
        `;
    filter.innerHTML = div;
};

export default createFilter;