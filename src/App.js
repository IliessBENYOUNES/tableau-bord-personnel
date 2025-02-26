/* Styles globaux */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f5f7fa;
}

.App {
  min-height: 100vh;
}

/* Styles pour les éléments courants */
button {
  cursor: pointer;
  transition: all 0.2s ease;
}

button:hover {
  transform: translateY(-1px);
}

button:active {
  transform: translateY(0);
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

/* Responsive design */
@media (max-width: 768px) {
  .grid-cols-3 {
    grid-template-columns: 1fr;
  }
  
  .flex {
    flex-direction: column;
  }
  
  .rounded-l, .rounded-r {
    border-radius: 0.25rem;
  }
  
  input[type="text"] {
    margin-bottom: 0.5rem;
  }
}
