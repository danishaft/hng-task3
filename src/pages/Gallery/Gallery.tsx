import {useState, useEffect, useContext} from "react"
import styles from "./Gallery.module.scss"
import Card from "../../components/Card/Card"
import jsonData from "../../data.json"
import { SortablePhoto } from "../../components/SortableCard/SortableCard"
import {DndContext, closestCenter, MouseSensor, TouchSensor, DragOverlay, useSensor, useSensors, DragStartEvent, UniqueIdentifier,} from '@dnd-kit/core'
import {arrayMove, SortableContext, rectSortingStrategy,} from '@dnd-kit/sortable'
// import { Navigate } from "react-router-dom"
// import { useAuth } from "../../contexts/AuthContext"
import { Context,  } from "../../contexts/SideBarContext"


function Gallery() {
  const [items, setItems] = useState(jsonData);
  const [filteredItems, setFilteredItems] = useState<{ url: string; tag: string; id: string; }[] | null>(null)
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  const activeElement = activeId ? filteredItems?.find(item => item.id === activeId!) : null
  // const _authVal = useAuth()
  // const _contextVal  = useSideBarContext()
  const _contextVal  = useContext(Context)
  _contextVal?.searchState
  const _values = _contextVal?.searchState;

  useEffect(() => {
    console.log(setItems)
    // console.log(_values)
    const filtered = items.filter((item) => item.tag.toLowerCase().includes(_values.toLowerCase()));
    setFilteredItems(filtered)
  }, [_values]);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <main className={styles.main}>
        {/* {!_authVal?.user && <Navigate to={"login"} replace={true}/>} */}
        <h1>This month</h1>
        <SortableContext items={items} strategy={rectSortingStrategy}>
          <div className={styles.gallery}>
            {filteredItems?.map((item) => {
              item.id = item.url
              return <SortablePhoto key={item.url} url={item.url} tag={item.tag} />
            })}
          </div>
        </SortableContext>

        <DragOverlay adjustScale={true}>
          {activeId ? (
            <Card url={activeElement!.url} index={items.indexOf(activeElement!)} tag={activeElement!.tag}  />
          ) : null}
        </DragOverlay>
      </main>
    </DndContext>
  )

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event: { active: any; over: any }) {
    const {active, over} = event;
    console.log(active.id, over.id)

    if (active.id !== over.id) {
      const activeElem = active.id ? filteredItems?.find(item => item.id === active.id): null
      const overElem = over.id ? filteredItems?.find(item => item.id === over.id): null
      setFilteredItems((items) => {
        const oldIndex = items?.indexOf(activeElem!);
        const newIndex = items?.indexOf(overElem!);
        return arrayMove(items!, oldIndex!, newIndex!);
      });
    }

    setActiveId(null);
  }

  function handleDragCancel() {
    setActiveId(null);
  }
}

export default Gallery