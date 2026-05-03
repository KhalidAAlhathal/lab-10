
    // Student data as JS objects
    const students = [
      { id: 101, name: 'ahmed', phone: '123-456-7890', major: 'SE' },
      { id: 102, name: 'abdullah', phone: '234-587-8901', major: 'NES' },
      { id: 103, name: 'zegul', phone: '789-788-9012', major: 'SE' },
      { id: 104, name: 'faris', phone: '456-789-0123', major: 'NES' },
      { id: 105, name: 'sarah', phone: '567-890-1234', major: 'SE' }
    ];

    // Filter students based on major 
    function filterStudents(major) {

      const filteredStudents = students.filter(student =>
        student.major === major);

      displayStudents(filteredStudents);

    }
    // Function to display students in the table
    function displayStudents(filteredStudents) {
      const tableBody = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
      tableBody.innerHTML = ''; // Clear previous rows

      filteredStudents.forEach(student => {
        
        const row = tableBody.insertRow();
        row.innerHTML = `  
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.phone}</td>
                    <td>${student.major}</td>
                `;
      });
    }
        //Display all students on page load
        displayStudents(students); 


