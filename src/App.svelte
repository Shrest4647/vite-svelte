<script lang="ts">
	import NewTaskForm from './ui/newTaskForm.svelte';
  import logo from "./assets/svelte.png";
  import Counter from "./lib/Counter.svelte";
  import Navbar from "./ui/navbar.svelte";
  import TaskItem from "./ui/taskItem.svelte";
  import { MyTaskStore } from "./store/taskStore";
  const { taskCount, activeCount, completeCount, activeTasks, completeTasks } =
    MyTaskStore;
</script>

<svelte:head>
  <link
    href="https://cdn.jsdelivr.net/npm/daisyui@1.16.2/dist/full.css"
    rel="stylesheet"
    type="text/css"
  />
  <link
    href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css"
    rel="stylesheet"
    type="text/css"
  />
</svelte:head>

<main id="main">
  <Navbar />
  <div class="container">
    <div id="add-task">
      <NewTaskForm/>
    </div>
    <div class="" id="all"><span class="badge">{$taskCount}</span> Tasks</div>
    <div class="card border my-2">
      <div class="justify-between px-5">
        <span>
          Active: {$activeCount}
        </span>
        <span>
          Complete: {$completeCount}
        </span>
      </div>
    </div>
    <!-- <br/> -->
    <div class="" id="active">
      <span class="badge">{$activeCount}</span> Active Tasks
    </div>
    {#each $activeTasks as taskItem, index (taskItem.id)}
      <!-- content here -->
      <TaskItem {taskItem} {index} />
    {:else}
      <!-- empty list -->
      <p class="primary">Wow! There is no task left.</p>
    {/each}

    <div class="" id="complete">
      <span class="badge">{$completeCount}</span> Complete Tasks
    </div>
    {#each $completeTasks as taskItem, index (taskItem.id)}
      <!-- content here -->
      <TaskItem {taskItem} {index} />
    {:else}
      <!-- empty list -->
      <p class="primary">Perfect! Let's get started.</p>
    {/each}
  </div>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
