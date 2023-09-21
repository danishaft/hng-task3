import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import Card, {CardProps} from '../Card/Card';


export const SortablePhoto = (props:CardProps ) => {
    const sortable = useSortable({id: props.url!});
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
    } = sortable;
  
    const extra = {
      transform: CSS.Transform.toString(transform),
      transition,
    };
  
    return (
      <Card
        ref={setNodeRef}
        extra={extra}
        {...props}
        {...attributes}
        {...listeners}
      />
    );
  };