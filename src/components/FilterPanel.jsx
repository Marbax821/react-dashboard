import { useDispatch, useSelector } from 'react-redux';
import { Badge } from '../UI/Badge';
import { Card } from '../UI/Card';
import { Stack } from '../UI/Stack';
import { selectFilters } from '../store/filters/filter-selectors';
import { removeFilter, clearFilter } from '../store/filters/filter-actions';


const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);

  // не показывать строку фильтров если не выбрано ни одного фильтра
  if (currentFilters.length === 0) {
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {
            currentFilters.map(filer => (
              <Badge
                key={filer}
                variant="clearable"
                onClear={() => dispatch(removeFilter(filer))}
              >{filer}</Badge>
            ))
          }
        </Stack>

        <button className='link' onClick={() => dispatch(clearFilter())}>Clear</button>
      </div>
    </Card>
  )
}

export { FilterPanel };