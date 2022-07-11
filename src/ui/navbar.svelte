<script>
  import { MyTaskStore } from "../store/taskStore";
  const { taskStore, taskCount, activeCount, completeCount, filterText } =
    MyTaskStore;
</script>

<div class="navbar bg-base-150 br-10">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl" href="#main"
      ><h1>Task List</h1>
    </a>
  </div>
  <div class="flex-1 gap-1">
    <div class="form-control">
      <input
        type="text"
        placeholder="Search"
        class="input input-bordered"
        bind:value={$filterText}
      />
    </div>
  </div>
  <div class="flex-none">
    <div class="dropdown dropdown-end">
      <button class="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-5 h-5 stroke-current"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          /></svg
        >
      </button>
      <ul
        tabindex="0"
        class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <a class="justify-between" href="#all">
            All Tasks
            <span class="badge">{$taskCount}</span>
          </a>
        </li>
        <li>
          <a class="justify-between" href="#active"
            >Active Tasks
            <span class="badge">{$activeCount}</span></a
          >
        </li>
        <li>
          <a class="justify-between" href="#complete"
            >Completed Tasks
            <span class="badge"> {$completeCount}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
