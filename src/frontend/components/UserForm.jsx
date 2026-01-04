// Componente mais complexo com integração para teste avançado
import { useState, useEffect } from 'react';

export function UserForm({ onSubmit, loading = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await onSubmit(formData);
        setSubmitted(true);
        setFormData({ name: '', email: '' });
      } catch (error) {
        setErrors({ submit: error.message });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} data-testid="user-form">
      {submitted && (
        <div data-testid="success-message" role="alert">
          Usuário criado com sucesso!
        </div>
      )}

      <div>
        <label htmlFor="name">Nome:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          data-testid="name-input"
          aria-invalid={!!errors.name}
        />
        {errors.name && <span data-testid="name-error">{errors.name}</span>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          data-testid="email-input"
          aria-invalid={!!errors.email}
        />
        {errors.email && <span data-testid="email-error">{errors.email}</span>}
      </div>

      {errors.submit && (
        <div data-testid="submit-error">{errors.submit}</div>
      )}

      <button type="submit" disabled={loading} data-testid="submit-btn">
        {loading ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
}

export default UserForm;
