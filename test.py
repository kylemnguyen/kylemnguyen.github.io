import matplotlib.pyplot as plt


strain = [0.0, 0.00133, 0.00200, 0.00267, 0.00333]
stress = [0.0, 33.33, 50.00, 66.67, 83.33]


plt.plot(strain, stress, marker='o')
plt.title('Stress-Strain Curve for 63Sn37Pb Solder')
plt.xlabel('Strain (mm/mm)')
plt.ylabel('Stress (MPa)')
plt.grid(True)
plt.show()