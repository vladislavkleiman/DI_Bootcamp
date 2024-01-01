class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node

def merge_sorted_linked_lists(list1, list2):
    dummy = Node(None)
    tail = dummy

    current1 = list1.head
    current2 = list2.head

    while current1 and current2:
        if current1.value < current2.value:
            tail.next = current1
            current1 = current1.next
        else:
            tail.next = current2
            current2 = current2.next
        tail = tail.next

    if current1:
        tail.next = current1
    elif current2:
        tail.next = current2

    return dummy.next


list1 = LinkedList()
list2 = LinkedList()


for value in [1, 3, 5]:
    list1.append(value)
for value in [2, 4, 6]:
    list2.append(value)


merged_list_head = merge_sorted_linked_lists(list1, list2)


current = merged_list_head
while current:
    print(current.value, end=" -> ")
    current = current.next

