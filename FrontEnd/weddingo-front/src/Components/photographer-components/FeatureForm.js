import React, { useState } from "react";
import { Form, Button, Badge, InputGroup } from "react-bootstrap";

function FeatureForm({ handleFraturesData }) {
  const [formData, setFormData] = useState({
    feature: [],
  });
  const [edit, setEdit] = useState(false);
  const [newFeature, setNewFeature] = useState("");

  // إضافة feature إلى القائمة
  const addFeature = () => {
    if (newFeature && !formData.feature.includes(newFeature)) {
      setFormData({
        ...formData,
        feature: [...formData.feature, newFeature],
      });
      setNewFeature("");
    }
  };

  // حذف feature من القائمة
  const removeFeature = (featureToRemove) => {
    setFormData({
      ...formData,
      feature: formData.feature.filter((f) => f !== featureToRemove),
    });
  };

  return (
    <Form dir={'ltr'}>
      <Form.Group className="mb-3">
        <Form.Label>الميزات</Form.Label>

        {edit && (
          <>
            {/* datalist لإدخال الميزات */}
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                list="featureList"
                value={newFeature}
                onChange={(e) => setNewFeature(e.target.value)}
                placeholder="أضف ميزة واضغط على إضافة"
              />
              <datalist id="featureList">
                <option value="ميزة1" />
                <option value="ميزة2" />
                <option value="ميزة3" />
              </datalist>
              <Button variant="primary" onClick={addFeature}>
                +
              </Button>
            </InputGroup>
          </>
        )}
      </Form.Group>

      {edit ? (
        <>
          <Button
            variant="success"
            onClick={() => {
              setEdit(false);
              return handleFraturesData(formData.feature);
            }}
          >
            تأكيد الميزات
          </Button>
        </>
      ) : (
        <>
          <Button
            variant="primary"
            onClick={() => {
              setEdit(true);
            }}
            className="mt-2"
          >
            إضافة ميزة
          </Button>
        </>
      )}

      {/* قائمة الميزات الحالية */}
      <div className="mb-2">
        {formData.feature.length !== 0 ? (
          <>
            {formData.feature.map((f, index) => (
              <Badge
                key={index}
                bg="secondary"
                className="me-2"
                style={{ cursor: "pointer" }}
                onClick={() => removeFeature(f)}
              >
                {f} &times;
              </Badge>
            ))}
          </>
        ) : (
          <>
            <p>لا توجد ميزات مضافة بعد.</p>
          </>
        )}
      </div>
    </Form>
  );
}

export default FeatureForm;
