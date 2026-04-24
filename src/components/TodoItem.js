function TodoItem({ tache, changerEtat, supprimerTache }) {
  return (
    <li style={{ listStyle: 'none', marginBottom: '10px' }}>
      <input
        type="checkbox"
        checked={tache.terminee}
        onChange={() => changerEtat(tache.id)}
      />
      <span style={{ textDecoration: tache.terminee ? 'line-through' : 'none', margin: '0 10px' }}>
        {tache.texte}
      </span>
      <button onClick={() => supprimerTache(tache.id)}>Supprimer</button>
    </li>
  );
}
export default TodoItem;