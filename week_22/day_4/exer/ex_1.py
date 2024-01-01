from collections import deque

class TaskScheduler:
    def __init__(self, num_priorities=3):
        self.queues = [deque() for _ in range(num_priorities)]

    def add_task(self, description, priority):
        self.queues[priority - 1].append(description)

    def execute_next_task(self):
        for queue in self.queues:
            if queue:
                task = queue.popleft()
                print(f"Executing task: {task}")
                return
        print("No tasks to execute.")

    def show_tasks(self):
        print("Task Queue:")
        for priority, queue in enumerate(self.queues, start=1):
            for task in queue:
                print(f"({task}, {priority})")


scheduler = TaskScheduler()
scheduler.add_task("Clean room", 2)
scheduler.add_task("Do homework", 1)
scheduler.execute_next_task()
scheduler.show_tasks()
