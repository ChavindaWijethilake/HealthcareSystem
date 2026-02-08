# Database Schema

The application uses **Appwrite** as its backend database. Data is organized into **Collections** within a single **Database**.

## Collections

### 1. Patients Collection
Stores detailed profile information for registered patients.

**Collection ID**: `PATIENT_COLLECTION_ID`

| Field Name | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `userId` | String | Yes | Unique ID linking to the Appwrite Auth user. |
| `name` | String | Yes | Full name of the patient. |
| `email` | String | Yes | Email address. |
| `phone` | String | Yes | Phone number in E.164 format. |
| `birthDate` | Date | Yes | Date of birth. |
| `gender` | String | Yes | Gender (Male, Female, Other). |
| `address` | String | Yes | Residential address. |
| `occupation` | String | Yes | Current occupation. |
| `emergencyContactName` | String | Yes | Name of emergency contact. |
| `emergencyContactNumber` | String | Yes | Phone number of emergency contact. |
| `primaryPhysician` | String | Yes | Name of the primary care physician. |
| `insuranceProvider` | String | Yes | Name of the insurance provider. |
| `insurancePolicyNumber` | String | Yes | Insurance policy number. |
| `allergies` | String | No | Known allergies (optional). |
| `currentMedication` | String | No | Current medications (optional). |
| `familyMedicalHistory` | String | No | Family medical history (optional). |
| `pastMedicalHistory` | String | No | Past medical history (optional). |
| `identificationType` | String | No | Type of ID document (e.g., Driver's License). |
| `identificationNumber` | String | No | ID number. |
| `identificationDocumentId` | String | No | ID of the uploaded document in Storage. |
| `identificationDocumentUrl` | String | No | URL to view the uploaded document. |
| `privacyConsent` | Boolean | Yes | Consent to privacy policy. |

### 2. Appointments Collection
Stores appointment details and status.

**Collection ID**: `APPOINTMENT_COLLECTION_ID`

| Field Name | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `patient` | Relationship | Yes | Reference to the `Patient` document. |
| `userId` | String | Yes | ID of the user booking the appointment. |
| `primaryPhysician` | String | Yes | Doctor selected for the appointment. |
| `reason` | String | Yes | Reason for the visit. |
| `schedule` | Date | Yes | Scheduled date and time. |
| `status` | String | Yes | Status: `pending`, `scheduled`, `cancelled`. |
| `note` | String | No | Admin notes or additional details. |

## Storage Buckets

### Identification Documents
Stores uploaded patient identification documents.

**Bucket ID**: `NEXT_PUBLIC_BUCKET_ID`

-   **Content Types**: Images (PNG, JPG, SVG), PDFs (implied).
-   **Security**: Read access restricted to authenticated users/admins.

## Entity Relationship Diagram (ERD)

```mermaid
erDiagram
    USER ||--|| PATIENT : "has profile"
    PATIENT ||--o{ APPOINTMENT : "requests"
    DOCTOR ||--o{ APPOINTMENT : "assigned to"

    USER {
        string $id PK
        string email
        string phone
        string name
    }

    PATIENT {
        string $id PK
        string userId FK
        string name
        date birthDate
        string gender
        string address
        string primaryPhysician
        string insuranceProvider
    }

    APPOINTMENT {
        string $id PK
        string patient FK
        string userId FK
        string primaryPhysician
        datetime schedule
        string status
        string reason
    }
```
