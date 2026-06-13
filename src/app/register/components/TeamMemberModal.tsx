import React, { useState } from 'react';
import styled from 'styled-components';
import { X } from 'lucide-react';

export type TeamMemberDetail = {
  id?: string;
  full_name: string;
  email: string;
  occupation: string;
  experience: string;
  profile_photo_url?: string;
};

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
`;

const Modal = styled.div`
  background: #0c0f13;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`;

const ModalHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0;
  }
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  padding: 0;
  &:hover {
    color: #fff;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.25rem;

  label {
    display: block;
    font-size: 0.85rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  input,
  textarea {
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 10px;
    padding: 0.75rem;
    color: #fff;
    font-family: inherit;
    font-size: 0.95rem;
    outline: none;

    &:focus {
      border-color: rgba(72, 214, 76, 0.5);
    }
  }

  textarea {
    resize: vertical;
    min-height: 70px;
  }
`;

const PhotoUpload = styled.div`
  margin-bottom: 1.25rem;

  label {
    display: block;
    font-size: 0.85rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  input[type='file'] {
    display: none;
  }

  .upload-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(72, 214, 76, 0.1);
    border: 1px solid rgba(72, 214, 76, 0.3);
    border-radius: 10px;
    padding: 0.75rem 1rem;
    color: #48d64c;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.85rem;
    text-decoration: none;
    &:hover {
      background: rgba(72, 214, 76, 0.15);
    }
  }

  .preview {
    margin-top: 0.75rem;
    width: 80px;
    height: 80px;
    border-radius: 10px;
    object-fit: cover;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const PaymentNote = styled.div`
  background: rgba(72, 214, 76, 0.08);
  border: 1px solid rgba(72, 214, 76, 0.2);
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);

  strong {
    color: #48d64c;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.75rem;

  button {
    flex: 1;
    padding: 0.8rem;
    border-radius: 10px;
    font-weight: 600;
    font-size: 0.9rem;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;

    &.save {
      background: #48d64c;
      color: #06210a;
      &:hover {
        filter: brightness(1.08);
      }
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    &.cancel {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #fff;
      &:hover {
        background: rgba(255, 255, 255, 0.12);
      }
    }
  }
`;

interface TeamMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (member: TeamMemberDetail) => Promise<void>;
  onUploadPhoto: (file: File) => Promise<string>;
}

export default function TeamMemberModal({
  isOpen,
  onClose,
  onSave,
  onUploadPhoto,
}: TeamMemberModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [occupation, setOccupation] = useState('');
  const [experience, setExperience] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const url = await onUploadPhoto(file);
      setPhotoUrl(url);
    } catch (err) {
      setError('Photo upload failed');
    }
  };

  const handleSave = async () => {
    if (!fullName.trim() || !email.trim() || !occupation.trim() || !experience.trim()) {
      setError('All fields are required');
      return;
    }

    setSaving(true);
    try {
      await onSave({
        full_name: fullName,
        email: email,
        occupation: occupation,
        experience: experience,
        profile_photo_url: photoUrl,
      });

      // Reset form
      setFullName('');
      setEmail('');
      setOccupation('');
      setExperience('');
      setPhotoUrl('');
      setError('');
      onClose();
    } catch (err: any) {
      setError(err.message || 'Failed to save team member');
    } finally {
      setSaving(false);
    }
  };

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <ModalHead>
          <h3>Add Team Member</h3>
          <CloseBtn onClick={onClose} type="button">
            <X size={20} />
          </CloseBtn>
        </ModalHead>

        <PaymentNote>
          Adding a team member costs <strong>₹100</strong>. You&apos;ll need to confirm payment after providing their details.
        </PaymentNote>

        <FormGroup>
          <label>Full Name *</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter team member's full name"
          />
        </FormGroup>

        <FormGroup>
          <label>Email *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter team member's email"
          />
        </FormGroup>

        <FormGroup>
          <label>Occupation *</label>
          <input
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            placeholder="e.g., Student, Software Engineer, Designer"
          />
        </FormGroup>

        <FormGroup>
          <label>Experience *</label>
          <textarea
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Describe their relevant experience and skills"
          />
        </FormGroup>

        <PhotoUpload>
          <label>Profile Photo (Optional)</label>
          <input
            type="file"
            id="member-photo"
            accept="image/*"
            onChange={handlePhotoUpload}
          />
          <label htmlFor="member-photo" className="upload-btn">
            <span>📸 Upload Photo</span>
          </label>
          {photoUrl && <img src={photoUrl} alt="preview" className="preview" />}
        </PhotoUpload>

        {error && (
          <div style={{ color: '#ff6b6b', fontSize: '0.85rem', marginBottom: '1rem' }}>
            {error}
          </div>
        )}

        <Buttons>
          <button
            type="button"
            className="save"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? 'Saving...' : 'Confirm & Pay ₹100'}
          </button>
          <button type="button" className="cancel" onClick={onClose}>
            Cancel
          </button>
        </Buttons>
      </Modal>
    </Overlay>
  );
}
