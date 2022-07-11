<script>
  import { MyTaskStore } from "../store/taskStore";
  const {activeTasks, completeTasks , toggleTaskCheck, taskStore} =
    MyTaskStore;
  export let taskItem;
  export let index;
  const handleCheck = (e)=> {
    // console.log(e.currentTarget.value, taskItem.id);
    taskStore.update((currentTasks) =>
      currentTasks.map((task) =>
        taskItem.id !== task.id ? task : { ...task, isChecked: !task.isChecked }
      )
    );
    // console.log($taskStore);
  }
</script>

<div class="card border my-2 " id="active">
  <div class="badge date-badge m-1 ml-auto">
    <span>{taskItem.created}</span>
  </div>
  <div class="form-control px-5 pb-2 gap-2 ">
    <label class="label cursor-pointer">
      <span class="primary-text">
        <span class="pr-2">{index + 1}.</span>{taskItem.desc}</span
      >
      <input
        type="checkbox"
        class="checkbox checkbox-round"
        name="isChecked"
        on:change="{handleCheck}"
        checked="{taskItem.isChecked}"
      />
    </label>
  </div>
</div>

<style>
  .date-badge {
    display: relative;
    right: -50%;
    top: -50%;
  }
  .checkbox-round {
    border-radius: 50%;
    vertical-align: middle;
    border: 2px solid #ddd;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
  }
</style>
