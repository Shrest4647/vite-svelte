import { derived, writable, Writable } from "svelte/store";
import { v4 as uuidv4 } from "uuid";

const getUUID = (): string => uuidv4();
type TaskItem = {
  id: string;
  isChecked: boolean;
  desc: string;
  created: string;
};
class TaskStore {
  constructor(
    public taskStore: Writable<TaskItem[]> = writable([
      {
        id: getUUID(),
        isChecked: true,
        desc: "Learn Svelte",
        created: "2022-07-01",
      },
      {
        id: getUUID(),
        isChecked: false,
        desc: "Learn React",
        created: "2022-07-05",
      },
    ]),
    public filterText: Writable<string> = writable("")
  ) {}

  addTask(newTask: string) {
    this.taskStore.update((currentTasks) => [
      ...currentTasks,
      {
        id: getUUID(),
        isChecked: false,
        desc: newTask,
        created: Date.now.toString(),
      },
    ]);
  }

  toggleTaskCheck(uuid: string) {
    this.taskStore.update((currentTasks) =>
      currentTasks.map((task) =>
        uuid !== task.id ? task : { ...task, isChecked: !task.isChecked }
      )
    );
  }

  get allTasks() {
    return derived(
      [this.taskStore, this.filterText],
      ([$taskStore, $filterText]) =>
        $taskStore.filter(
          ({ desc }) =>
            !$filterText ||
            desc.toLowerCase().includes($filterText.toLowerCase())
        )
    );
  }
  get activeTasks() {
    return derived(
      [this.taskStore, this.filterText],
      ([$taskStore, $filterText]) =>
        $taskStore
          .filter((task) => !task.isChecked)
          .filter(
            ({ desc }) =>
              !$filterText ||
              desc.toLowerCase().includes($filterText.toLowerCase())
          )
    );
  }
  get completeTasks() {
    return derived(
      [this.taskStore, this.filterText],
      ([$taskStore, $filterText]) =>
        $taskStore
          .filter((task) => task.isChecked)
          .filter(
            ({ desc }) =>
              !$filterText ||
              desc.toLowerCase().includes($filterText.toLowerCase())
          )
    );
  }
  get taskCount() {
    // Use derived to access writable values and export as readonly
    return derived([this.taskStore], ([$taskStore]) => $taskStore.length);
  }
  get activeCount() {
    // Use derived to access writable values and export as readonly
    return derived(
      [this.taskStore],
      ([$taskStore]) => $taskStore.filter((task) => !task.isChecked).length
    );
  }
  get completeCount() {
    // Use derived to access writable values and export as readonly
    return derived(
      [this.taskStore],
      ([$taskStore]) => $taskStore.filter((task) => task.isChecked).length
    );
  }
}

// Export a singleton
export const MyTaskStore = new TaskStore();
