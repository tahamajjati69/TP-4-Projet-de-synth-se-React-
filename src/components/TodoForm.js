import { useState } from 'react';

function TodoForm({ ajouterTache }) {
  const [texte, setTexte] = useState('');

  const soumettreFormulaire = (e) => {
    e.preventDefault();
    if (texte.trim() === '') return;
    ajouterTache(texte);
    setTexte('');
  };

  return (
    <form onSubmit={soumettreFormulaire} style={{ margin: '20px 0' }}>
      <input
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
        placeholder="Nouvelle tâche"
        required
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}
export default TodoForm;