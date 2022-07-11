<script>
  import { MyTaskStore } from "../store/taskStore";
  import { v4 as uuidv4 } from "uuid";

  const { taskStore } = MyTaskStore;
  let taskDesc = "";
  const handleSubmit = () => {
    console.log(taskDesc);
    taskStore.update((currentTasks) => [
      ...currentTasks,
      {
        id: uuidv4(),
        isChecked: false,
        desc: taskDesc,
        created: Date.now().toString(),
      },
    ]);
    taskDesc = "";
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-control w-full max-w-xs">
    <label for="task" class="label">
      <span class="label-text">What is the task?</span>
      <!-- <span class="label-text-alt">Alt label</span> -->
    </label>
    <div class="grid-cols-1">
      <input
        type="text"
        placeholder="Type here"
        class="input input-bordered input-accent w-full max-w-xs"
        bind:value={taskDesc}
      />
    </div>
    <!-- <div class="grid-cols-1">
      <button
        class="btn-outline"
        disabled={taskDesc?.trim()?.length < 5}
        type="submit">Submit</button>
    </div> -->
    <label for="alt" class="label">
      <span class="label-text-alt">Eg. Fetch Grocery</span>
      <span class="label-text-alt">{taskDesc}</span>
    </label>
  </div>
</form>
