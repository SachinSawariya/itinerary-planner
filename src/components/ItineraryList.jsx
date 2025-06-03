import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import itineraryData from '../data/mockData';
import ItineraryCard from './ItineraryCard';

function SortableItem({ id, item, index }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ 
    id,
    touchAction: 'none',
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    scale: isDragging ? 1.05 : 1,
    zIndex: isDragging ? 999 : 'auto',
    marginBottom: '0.75rem',
    touchAction: 'none',
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`transition-transform duration-200 ease-in-out touch-manipulation`}
      data-draggable="true"
    >
      <ItineraryCard item={item} index={index + 1} />
    </div>
  );
}

const ItineraryList = () => {
  const [activities, setActivities] = useState(itineraryData);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 0,
        tolerance: 5,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 0,
        tolerance: 0,
      },
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = activities.findIndex((a) => a.id === active.id);
      const newIndex = activities.findIndex((a) => a.id === over.id);

      setActivities((items) => arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <div className="pb-4">
      <h2 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">Itinerary</h2>
      <p className="text-xs md:text-sm text-gray-600 mb-4">Day: 03-June</p>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={activities.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {activities.map((item, index) => (
            <SortableItem key={item.id} id={item.id} item={item} index={index} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default ItineraryList;
