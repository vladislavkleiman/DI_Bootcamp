import matplotlib.pyplot as plt

grades = [88, 90, 95, 92, 88, 90, 88, 85, 93, 92, 90, 87, 95, 90, 88]

plt.hist(grades, bins='auto', color='blue', alpha=0.7, rwidth=0.85)

plt.title('Distribution of Grades in a Class')
plt.xlabel('Grades')
plt.ylabel('Frequency')

plt.show()
