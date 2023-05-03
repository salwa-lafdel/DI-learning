const tasks = [];

function addTask() {
	const taskInput = document.getElementById("task");
	if (taskInput.value !== "") {
		// Ajouter la tâche au tableau
		tasks.push(taskInput.value);
		// Réinitialiser la valeur de l'entrée
		taskInput.value = "";
		// Mettre à jour la liste de tâches dans le DOM
		updateTaskList();
	}
    else{
        alert('attention votre entrée est vide')
    }
}

function updateTaskList() {
	const taskListDiv = document.querySelector(".listTasks");
	// Vider la liste de tâches dans le DOM
	taskListDiv.innerHTML = "";
	// Ajouter chaque tâche au DOM
	tasks.forEach(function(task, index) {
		// Créer une div pour chaque tâche
		const taskDiv = document.createElement("div");
		taskDiv.classList.add("task");
		// Créer une case à cocher pour la tâche
		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.id = "task_" + index;
		// Créer une étiquette pour la case à cocher
		const label = document.createElement("label");
		label.setAttribute("for", "task_" + index);
		label.textContent = task;
		// Créer un bouton pour supprimer la tâche
		const button = document.createElement("button");
		button.classList.add("delete");
		button.innerHTML = '<i class="fas fa-times"></i>';
		// Ajouter la tâche, la case à cocher et le bouton à la div de tâche
		taskDiv.appendChild(checkbox);
		taskDiv.appendChild(label);
		taskDiv.appendChild(button);
		// Ajouter la div de tâche à la liste de tâches dans le DOM
		taskListDiv.appendChild(taskDiv);
	});
}

