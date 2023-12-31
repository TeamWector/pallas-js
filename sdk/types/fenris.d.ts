// @ts-nocheck
declare module "fenris" {
  enum AttributeId {
    Axe_Bad_Data,
    Stash_Slots,
    Strength,
    Intelligence,
    Willpower,
    Dexterity,
    Plus_All_Stats,
    Strength_Core,
    Intelligence_Core,
    Willpower_Core,
    Dexterity_Core,
    Strength_Percent_Bonus,
    Intelligence_Percent_Bonus,
    Willpower_Percent_Bonus,
    Dexterity_Percent_Bonus,
    All_Stats_Percent_Bonus,
    Strength_Total,
    Intelligence_Total,
    Willpower_Total,
    Dexterity_Total,
    Core_Stats_Bonus_Strength,
    Core_Stats_Bonus_Intelligence,
    Core_Stats_Bonus_Willpower,
    Core_Stats_Bonus_Dexterity,
    Core_Stat_Minor_Benefit_Scalar_Strength,
    Core_Stat_Minor_Benefit_Scalar_Intelligence,
    Core_Stat_Minor_Benefit_Scalar_Willpower,
    Core_Stat_Minor_Benefit_Scalar_Dexterity,
    Experience_Granted,
    Experience_Next_Hi,
    Experience_Next_Lo,
    Rest_Experience_Hi,
    Rest_Experience_Lo,
    Rest_Experience_Bonus_Percent,
    Gold_Granted,
    Currency_Cap_Bonus_Amount,
    Currency_Drop_Percent_Bonus,
    Level,
    Level_Cap,
    Level_Scaling_Min,
    Level_Scaling_Match_Until_Level,
    Level_Scaling_Delta_Base,
    Level_Scaling_Delta_Subzone_Modifier_Bonus,
    Level_Scaling_Max,
    Intensity_Level,
    Monster_Combat_Scaling_Level,
    Monster_Combat_Scaling_Level_Distribution,
    Pet_Flat_Health,
    Pet_Health_Bonus_Percent,
    Pet_Armor_Bonus_Percent,
    Pet_All_Resistance_Bonus_Percent,
    Debug_Damage_Percent_Bonus,
    Debug_Damage_Reduction_Percent_Bonus,
    Debug_Stagger_Percent_Bonus,
    Debug_Extra_Zone_Progress_Per_Zone,
    Monster_Combat_Item_Power_Delta_KeyDun,
    Hitpoints_Max_Percent_Bonus_KeyDun,
    Damage_Percent_Bonus_KeyDun,
    Faster_Healing_Percent,
    Spending_Resource_Heals_Percent,
    Bonus_Healing_Received_Percent,
    Core_Stat_Bonus_Healing_Received_Percent,
    Reduced_Healing_Received_Percent,
    Experience_Bonus,
    Experience_Bonus_Percent,
    Experience_Bonus_Percent_Total,
    Experience_Bonus_Percent_Vs_Elites,
    Resistance,
    Resistance_Total,
    Resistance_All,
    Resistance_All_Core_Stat_Bonus,
    Resistance_All_Reduction_Percent,
    Class_Damage_Reduction_Percent_PvE,
    Skill,
    Skill_Special_Unlock,
    Skill_Points_Bonus,
    Skill_Points_Earned,
    Skill_Points_Earned_Total,
    Skill_Points_Spent,
    Skill_Tree_Skill_Unlocked,
    Skill_Tree_Skill_Mod_Unlocked,
    TeamID,
    Team_Override,
    Invulnerable,
    Death_Triggered,
    Death_Reason,
    Dead,
    Disable_Dur_Hit_On_Rez,
    Loading,
    Loading_Player_ACD,
    Loading_Power_SNO,
    Loading_Anim_Key,
    No_Damage,
    No_AutoPickup,
    Hitpoints_Cur,
    Hitpoints_Granted,
    Hitpoints_Over_Time_Granted_Duration,
    Hitpoints_Max,
    Hitpoints_Max_Bonus,
    Hitpoints_Max_Total,
    Hitpoints_Max_Base,
    Hitpoints_Percent,
    Flat_Hitpoints_Granted,
    Flat_Hitpoints_Granted_Unscaled_By_Player_Health,
    Flat_Hitpoints_Over_Time_Granted,
    Flat_Hitpoints_Over_Time_Granted_Unscaled_By_Player_Health,
    Percent_Hitpoints_Over_Time_Granted,
    Flat_Hitpoints_Max_Bonus,
    Flat_Hitpoints_Max_Bonus_Unscaled_By_Player_Health,
    Hitpoints_Regen_Per_Second,
    Hitpoints_Regen_Per_Second_Bonus,
    Hitpoints_Regen_Bonus_Percent,
    Hitpoints_Regen_Per_Second_Subtotal,
    Hitpoints_Regen_Reduction_Percent,
    Hitpoints_Regen_Per_Second_Health_Globe,
    Hitpoints_Regen_Per_Second_Total,
    Hitpoints_Max_Percent_Bonus,
    Hitpoints_Max_Percent_Bonus_Item,
    Hitpoints_Healed_Target,
    Hitpoints_Frozen,
    DOT_Damage_Taken_Queued,
    DOT_Damage_Taken_Queued_Scaled,
    Damage_Shield_Amount_Queued,
    DOT_Damage_Taken_Queued_Player,
    DOT_Damage_Taken_Queued_Player_Scaled,
    Resource_Type_Primary,
    Resource_Type_Secondary,
    Resource_Cur,
    Resource_Min,
    Resource_Max,
    Resource_Max_Bonus,
    Resource_Max_Per_Level,
    Resource_Max_Percent_Bonus,
    Resource_Max_Total,
    Resource_Regen_Per_Second,
    Resource_Regen_Bonus_Percent,
    Resource_Regen_All_Primary_Bonus_Percent,
    Resource_Regen_Percent_Per_Second,
    Resource_Regen_Scalar,
    Resource_Regen_Total,
    Resource_STARTING_PERCENT,
    Resource_Gained_Per_Percent_Damage_Taken,
    Resource_Cost_Reduction_Amount,
    Resource_Cost_Reduction_Percent,
    Resource_Cost_Reduction_Percent_All,
    Resource_Cost_Reduction_Percent_Total,
    Damage_Type_Resource_Cost_Reduction_Percent,
    Skill_Tag_Resource_Cost_Reduction_Percent,
    Power_Resource_Cost_Reduction_Amount,
    Power_Resource_Cost_Reduction_Percent,
    Resource_Gain_Bonus_Percent,
    Resource_Gain_Bonus_Percent_All_Primary,
    Resource_Gain_Bonus_Percent_Per_Power,
    Resource_Gain_Bonus_Percent_Per_Skill_Tag,
    Resource_Gain_And_Regen_Bonus_Percent,
    Resource_Gain_And_Regen_Bonus_Percent_All_Primary,
    Resource_Gain_Reduction_Percent,
    Movement_Scalar,
    Walking_Rate,
    Running_Rate,
    Sprinting_Rate,
    Strafing_Rate,
    Walking_Rate_Total,
    Running_Rate_Total,
    Last_Running_Rate,
    Sprinting_Rate_Total,
    Strafing_Rate_Total,
    Movement_Bonus_Total,
    Movement_Scalar_Subtotal,
    Movement_Scalar_Capped_Total,
    Movement_Scalar_Uncapped_Bonus,
    Movement_Scalar_Total,
    Movement_Bonus_Run_Speed,
    Movement_Scalar_Cap,
    Movement_Rate,
    Force_Stationary,
    Anim_Permutation_Group,
    Anim_Permutation_Group_Override,
    Turn_Speed,
    Run_Turn_Speed,
    Default_Attack_Turn_Speed,
    Dynamic_Movement_Data_Override,
    Knockback_Attack_Scalar,
    Attack_Speed_Percent_Bonus,
    Attack_Speed_Percent_Reduction,
    Weapon_Speed_Percent_Bonus,
    Weapon_Speed_Percent_Reduction,
    Attacks_Per_Second_Total,
    Attack_Speed_Percent_Temp_Bonus,
    Attack_Speed_Percent_Temp_Reduction,
    Attack_Speed_Percent_Bonus_For_Power,
    Attack_Speed_Percent_Bonus_While_Fortified,
    Attack_Speed_Percent_Bonus_Per_Skill_Tag,
    AI_Cooldown_Reduction_Percent,
    Power_Cooldown_Min_Time,
    Power_Cooldown_Reduction_Percent,
    Power_Cooldown_Reduction_Percent_All,
    Skill_Tag_Cooldown_Reduction_Percent,
    Power_Cooldown_Increase_Percent,
    Power_Cooldown_Increase_Percent_All,
    Power_Cooldown_Flat_Second_Increase_All,
    Zero_Cooldown_Per_Power,
    Zero_Cooldown_Per_Skill_Tag,
    Zero_Resource_Cost_Per_Power,
    Zero_Resource_Cost_Per_Skill_Tag,
    Damage_Actor_Scalar,
    Damage_Percent_All_From_Skills,
    Multiplicative_Damage_Percent_All_From_Skills,
    Damage_Type_Percent_Bonus,
    Multiplicative_Damage_Type_Percent_Bonus,
    NonPhysical_Damage_Percent_Bonus,
    Damage_Percent_Bonus_To_Targets_Affected_By_Skill_Tag,
    Damage_Percent_Bonus_Per_Skill_Tag,
    Multiplicative_Damage_Percent_Bonus_Per_Skill_Tag,
    Damage_Percent_Bonus_Per_Weapon_Requirement,
    Main_Hand_Damage_Percent_Bonus,
    Flat_Damage_Bonus,
    Flat_Damage_Bonus_Unscaled_By_Player_Health,
    Power_Flat_Damage_Bonus,
    Power_Flat_Damage_Bonus_Unscaled_By_Player_Health,
    Flat_Damage_On_Hit,
    Flat_Damage_On_Hit_Unscaled_By_Player_Health,
    Crit_Percent_Base,
    Crit_Percent_Bonus,
    Crit_Percent_Bonus_Per_Skill_Tag,
    Damage_Type_Crit_Percent_Bonus,
    Damage_Type_Crit_Percent_Bonus_Vs_Elites,
    Crit_Percent_Bonus_Vs_CC_Target,
    Crit_Percent_Bonus_Vs_CC_Target_Any,
    Crit_Percent_Bonus_To_Vulnerable,
    Crit_Percent_Bonus_To_Low_Health,
    Crit_Percent_Bonus_Per_Weapon_Requirement,
    Crit_Damage_Percent,
    Multiplicative_Crit_Damage_Percent,
    Crit_Damage_Percent_Per_Skill_Tag,
    Multiplicative_Crit_Damage_Percent_Per_Skill_Tag,
    Damage_Type_Crit_Damage_Percent_Bonus,
    Non_Physical_Crit_Damage_Percent_Bonus,
    Amplify_Damage_Crit_Percent,
    Multiplicative_Amplify_Damage_Crit_Percent,
    Crit_Damage_Percent_Bonus_Vs_CC_Target_Any,
    Crit_Damage_Percent_Bonus_To_Vulnerable,
    Crit_Damage_Scalar_Reduction_Percent,
    Crit_Damage_Percent_Per_Weapon_Requirement,
    Crit_Damage_Percent_For_Power,
    Crit_Damage_Deals_Max_Damage,
    Damage_Variance_Min_Percent_Reduction,
    Damage_Variance_Max_Percent_Bonus,
    Overpower_Chance_Base,
    Overpower_Chance_Bonus,
    Overpower_Chance_Bonus_Per_Skill_Tag,
    Overpower_Chance_Bonus_Per_Skill,
    Overpower_Damage_Bonus_Per_Skill,
    Overpower_Chance_Reduction_Percent,
    Overpower_Damage_Percent_Bonus,
    Multiplicative_Overpower_Damage_Percent_Bonus,
    Overpower_Damage_Percent_Bonus_Per_Skill_Tag,
    Overpower_Damage_Percent_Bonus_Per_Weapon_Requirement,
    Multiplicative_Overpower_Damage_Percent_Bonus_Per_Weapon_Requirement,
    Amplify_Overpower_Damage,
    Blood_Orb_Pickup_Damage_Percent_Bonus,
    Blood_Orb_Pickup_Damage_Bonus_Duration,
    Blood_Orb_Pickup_Healing_Percent_Bonus,
    Imbued_Skill_Damage_Percent_Bonus,
    Cold_Imbued_Skill_Damage_Percent_Bonus,
    Poison_Imbued_Skill_Damage_Percent_Bonus,
    Shadow_Imbued_Skill_Damage_Percent_Bonus,
    Imbued_Skill_Crit_Damage_Percent_Bonus,
    Imbued_Skill_Strength_Percent_Bonus,
    Bonus_Ice_Armor_Shield_Percent,
    Trap_Arm_Time_Reduction_Seconds,
    Pierce_Chance,
    Block_Chance,
    Block_Damage_Percent,
    Flat_Block_Amount,
    Flat_Block_Amount_Unscaled_By_Player_Health,
    Armor_Ignore_Damage_Percent,
    Damage_Armor,
    Dodge_Chance_Bonus,
    Core_Stat_Dodge_Chance_Bonus,
    Dodge_Chance_Bonus_Melee,
    Dodge_Chance_Bonus_Ranged,
    Dodge_Chance_Bonus_Additive,
    Dodge_Chance_Bonus_Hide_From_Toughness,
    Dodge_Chance_Bonus_From_Dotted_Enemies,
    Dodge_Chance_Reduction_Percent,
    Cannot_Dodge,
    Last_Damage_MainActor,
    Last_ACD_Attacked,
    Immunity,
    Ignores_Critical_Hits,
    Untargetable,
    Is_Crowd_Control,
    Crowd_Control_Immune,
    Immune_To_Knockback,
    CC_Duration_Bonus_Percent,
    CC_Duration_Bonus_Percent_Per_Type,
    CC_Duration_Reduction,
    CC_Duration_Reduction_Per_Type,
    Chill_Bonus_Percent,
    Chill_Progressive_Bonus_Slow_Percent,
    Helpful_Buff_Duration_Bonus_Percent,
    Harmful_Buff_Duration_Bonus_Percent,
    Per_Damage_Type_Buff_Duration_Bonus_Percent,
    Per_Skill_Tag_Buff_Duration_Bonus_Percent,
    Gethit_Immune,
    AttackSpeed_Reduction_Immune,
    Thorns_Percent,
    Thorns_Flat,
    Thorns_Flat_Unscaled_By_Player_Health,
    Thorns_AOE_Radius,
    Thorns_Enabled_Flags,
    Steal_Health_Percent,
    Steal_Mana_Percent,
    Resource_On_Hit,
    Proc_Resource_On_Hit_Percent,
    Proc_Resource_On_Hit_Percent_All_Primary,
    Resource_On_Hit_Bonus_Pct,
    Resource_On_Hit_Bonus,
    Resource_On_Kill,
    Resource_On_Crit,
    Flat_Hitpoints_On_Hit,
    Flat_Hitpoints_On_Hit_Unscaled_By_Player_Health,
    Flat_Hitpoints_On_Kill,
    Flat_Hitpoints_On_Kill_Unscaled_By_Player_Health,
    Percent_Life_On_Kill,
    Hitpoints_On_Kill_Total,
    Last_Proc_Time,
    Flat_Damage_Shield_On_Kill,
    Flat_Damage_Shield_On_Kill_Unscaled_By_Player_Health,
    Rope_Overlay,
    General_Cooldown,
    Power_Cooldown,
    Power_Cooldown_Start,
    Skill_Slot_Cooldown,
    Skill_Slot_Cooldown_Start,
    Proc_Cooldown,
    Emote_Cooldown,
    Skill_Toggled_State,
    Skill_Charges,
    Next_Charge_Gained_time,
    Recharge_Start_Time,
    Last_Damage_Amount,
    Amplify_Damage_Type_Percent,
    Multiplicative_Amplify_Damage_Type_Percent,
    Amplify_Damage_DOT_Type_Percent,
    Multiplicative_Amplify_Damage_DOT_Type_Percent,
    Amplify_Damage_Skill_Percent,
    Amplify_Damage_Percent,
    Multiplicative_Amplify_Damage_Percent,
    Amplify_Damage_From_Pets_Per_Player_Percent,
    Loot_Last_Damage,
    Item_Quality_Level,
    Item_Quality_Level_Identified,
    Item_Quality_Modifier,
    Item_Cost_Percent_Bonus,
    Item_Equipped,
    Item_Ping,
    Item_Durability_Percent,
    Item_Durability_Effectiveness,
    Ignore_Durability_Loss,
    Requirement,
    Requirements_Ease_Percent,
    Requirement_When_Equipped,
    Sockets,
    Sockets_Filled,
    Item_Bound_To_ACD,
    Item_Binding_Level_Override,
    Item_Targeted_Player_Class,
    Item_Targeted_Hireling_Class,
    ItemStackQuantityHi,
    ItemStackQuantityLo,
    Item_Power,
    Item_Power_Bonus,
    Item_Power_Total,
    Item_Upgrade_Count,
    Effective_Item_Power,
    Total_Weighted_Item_Power,
    Total_Weighted_Item_Power_Override,
    Base_Item_Power_Bonus_Percent,
    Item_Dropped_World_Tier,
    Item_Dropped_Dungeon_Level,
    Debug_Loot_Log_Output_ID,
    Weapon_Damage_Min,
    Weapon_Damage_Delta,
    Effective_Weapon_Damage_Min,
    Effective_Weapon_Damage_Delta,
    Weapon_Damage_Min_Total,
    Weapon_Damage_Delta_Total,
    Armor,
    Effective_Armor,
    Armor_Total,
    Core_Stat_Armor_Bonus,
    Armor_Percent,
    Werebear_Armor_Percent,
    Werewolf_Armor_Percent,
    Armor_Bonus,
    Weapon_Damage_Override,
    Armor_Override,
    Incoming_Weapon_Damage_Override,
    Incoming_Armor_Override,
    Paragon_Points_Bonus,
    Paragon_Points_Earned,
    Paragon_Points_Earned_Total,
    Paragon_Points_Available,
    Paragon_Node_Is_Purchased,
    Paragon_Glyph_Affix_Active,
    Paragon_Glyph_Experience_Max,
    Paragon_Glyph_Experience_Used,
    Run_Speed_Granted,
    Run_Speed_Duration,
    Seed,
    IsCrafted,
    IsVendorBought,
    IsTraded,
    IsEscrowed,
    Dye,
    ConsumableAddSockets,
    HighlySalvageable,
    Enchanted_Replaced_Affix,
    Enchanted_Affix,
    Enchanted_Affix_Seed,
    Enchant_Count,
    Always_Plays_GetHit,
    Hidden,
    Appearance_Hidden,
    Hide_All_Attachments,
    Targeting_Outline_Hidden,
    RActor_Fade_Group,
    Alpha_Attachments,
    Is_AnimTree_Enabled,
    Animset_Override,
    Hide_Attachment_By_Tag,
    Hide_Cosmetic_Back_Attachment,
    Treasure_Class,
    Removes_Body_On_Death,
    Died_To_Resurrectable_Death,
    Can_Be_Resurrected,
    UntargetableByPets,
    Damage_State_Current,
    Is_Player_Decoy,
    Custom_Target_Weight,
    Custom_Target_Weight_Per_Actor,
    Malignant_Monster_Color,
    Malignant_Monster_Tier,
    Malignant_Cage_Level,
    Malignant_Socket_Color,
    Gizmo_State,
    Gizmo_Charges,
    Chest_Open,
    Door_Timer,
    Gizmo_Disabled_By_Script,
    Gizmo_Operator_ACDID,
    Triggering_Count,
    Gizmo_Operation_Radius_Override,
    Gizmo_Is_Quest_Restricted,
    Gizmo_Visibility_Is_Quest_Restricted,
    Gizmo_Chair_Occupied,
    Gizmo_Has_Been_Operated,
    Gizmo_Power_Operate,
    Gizmo_Power_Operator,
    Pet_Owner_ANN,
    Pet_Type,
    DropsNoLoot,
    GrantsNoXP,
    Hireling_Class,
    Summoned_By_SNO,
    Parent_Summoning_Skill_SNO,
    Pet_Cannot_Be_Dismissed,
    Follower_Quest,
    Is_Unmanaged_Quest_Follower,
    Pet_Equipped_Proc_Resource_On_Hit_Percent,
    Pet_Equipped_Solo_Attacker_Damage_Bonus,
    Pet_Equipped_Other_Attacker_Damage_Bonus,
    Pet_Equipped_Recently_Summoned_Damage_Bonus,
    Pet_Inherit_Attrib_Bonus_Pct,
    NecroArmy_Spec_For_Pet_Type,
    NecroArmy_Specialization1_Upgrade_For_Pet_Type,
    NecroArmy_Specialization2_Upgrade_For_Pet_Type,
    NecroArmy_Specialization3_Upgrade_For_Pet_Type,
    NecroArmy_Pet_Type_Health_Bonus_Pct,
    NecroArmy_Pet_Type_Inherit_Thorns_Bonus_Pct,
    NecroArmy_Pet_Type_All_Resist_Bonus_Pct,
    NecroArmy_Pet_Type_Damage_Bonus_Pct,
    Multiplicative_NecroArmy_Pet_Type_Damage_Bonus_Pct,
    NecroArmy_Pet_Type_Armor_Bonus_Pct,
    NecroArmy_Pet_Type_Attack_Speed_Bonus_Pct,
    NecroArmy_Damage_Bonus_With_Active_Pet_Type,
    NecroArmy_Flat_Armor_Bonus_With_Active_Pet_Type,
    NecroArmy_Armor_Percent_Bonus_With_Active_Pet_Type,
    Is_NPC,
    NPC_Is_Operatable,
    NPC_Is_Escorting,
    NPC_Has_Interact_Options,
    Conversation_Icon,
    Conversation_Icon_Quest,
    Callout_Cooldown,
    Banter_Cooldown,
    Conversation_Heard_Count,
    Last_Tick_Shop_Entered,
    Bow,
    Crossbow,
    BowAny,
    Spawned_by_ACDID,
    Summoned_By_ACDID,
    Summoner_ID,
    Use_Summoner_Damage_Stats,
    Current_WeaponClass,
    Follower_Sheath_Action,
    Weapons_Sheathed,
    Held_In_OffHand,
    Active_Weapon_Slot,
    In_Combat,
    Last_In_Combat_Time,
    Scripted_In_Combat,
    Combat_Bloodiness,
    Shapeshifting_Stay_In_Form,
    Shapeshifting_Queue_Back_To_Human,
    Shapeshift_Form,
    Skill_Shapeshift_Form_Wolf_Override,
    Skill_Shapeshift_Form_Bear_Override,
    Default_Shapeshift_Form_Wolf_Override,
    Default_Shapeshift_Form_Bear_Override,
    In_Conversation,
    Last_Tick_Potion_Used,
    Potion_Bonus_Heal_Percent,
    Potion_Cooldown_Reduction_Percent,
    Potion_Tier,
    Potion_Doses,
    Potion_Max_Doses_Base,
    Potion_Max_Doses_Bonus,
    Potion_Max_Doses_Total,
    Potion_Special_Doses,
    Potion_Special_Dose_Power,
    Potion_Charge,
    Potion_Charge_Generation_Bonus_Pct,
    Potion_Charge_Yield_Bonus_Pct,
    Potion_Use_Granted_Barrier_Percent,
    Potion_Use_Granted_Primary_Resource_Amount,
    Potion_Use_Granted_Unstoppable_Seconds,
    Potion_Dose_Drop_Total_Thresholds,
    Last_Potion_Dose_Drop_Interval,
    Can_Use_Potion_While_Full_Health,
    No_Damage_Taken_Flat_Hitpoints_Regen_Per_Second,
    No_Damage_Taken_Flat_Hitpoints_Regen_Per_Second_Unscaled_By_Player_Health,
    OOC_Flat_Hitpoints_Regen_Per_Second,
    OOC_Flat_Hitpoints_Regen_Per_Second_Unscaled_By_Player_Health,
    Out_Of_Combat_Hitpoints_Regen_Delay_On_Leave_Combat,
    Out_Of_Combat_Resource_Regen,
    Out_Of_Combat_Resource_Regen_Delay_On_Spend_Resource,
    Out_Of_Combat_Resource_Regen_Delay_On_Leave_Combat,
    Out_Of_Combat_Resource_Regen_Allowed_Time,
    Last_Damage_ACD,
    Attached_To_ACD,
    Attachment_ACD,
    Knockback_Attachment_ACD,
    Normal_Attack_Replacement_Power_SNO,
    Expensive_Proc_Count,
    Base_Element,
    Enable_Base_Element_Damage_Type_Override,
    Projectile_Forced_Target,
    Projectile_Reflect_Chance,
    Projectile_Reflect_Damage_Scalar,
    Projectile_Reflect_Has_Damage_Cap,
    Projectile_Reflect_Damage_Cap_Remaining,
    Projectile_Bouncing_Enabled,
    Projectile_Gravity_Multiplier,
    Projectile_Seek_Rotation_Rate,
    Buff_Visual_Effect,
    Active_Weapon_Effect_Override,
    Could_Have_Ragdolled,
    Scale_Bonus,
    Scale_Bonus_Is_Immediate,
    Scale_Bonus_Per_Tick,
    Deleted_On_Server,
    Scripted_Fade_Time,
    Scripted_Look_Override,
    Pet_Fade_Out,
    Does_No_Damage,
    SlowTime_Debuff,
    Blocks_Projectiles,
    Blocks_Projectiles_With_Feedback,
    Summon_Expiration_Tick,
    Summon_Count,
    Uninterruptible,
    Queue_Death,
    Death_Power_Override,
    Special_Death_Power_Override,
    CantStartDisplayedPowers,
    PlayerSkillSuppressingDisplayedPowers,
    DPS,
    DOT_DPS,
    DOT_Total,
    DOT_Infinite_Total,
    DOT_DPS_Bonus_Percent,
    DOT_DPS_Bonus_Percent_Per_Damage_Type,
    Multiplicative_DOT_DPS_Bonus_Percent_Per_Damage_Type,
    DOT_DPS_Reduction_Percent,
    DOT_DPS_Reduction_Percent_Per_Damage_Type,
    DOT_Speed_Bonus_Percent_Per_Damage_Type,
    Disable_Health_Prediction,
    DamageCap_Percent,
    Item_Time_Sold,
    Forced_Hireling_Power,
    Hide_Affixes,
    Displays_Team_Effect,
    Cannot_Be_Added_To_AI_Target_List,
    SkillKit,
    In_Retreat_Volume,
    Damage_Shield,
    Damage_Shield_Accumulated_Amount,
    Damage_Shield_Max,
    Damage_Shield_Bonus_Percent_Damage,
    Flat_Heal_Absorb,
    Flat_Heal_Absorb_Unscaled_By_Player_Health,
    Is_Berserk,
    Vulnerable,
    Vulnerable_Health_Damage_Bonus,
    Multiplicative_Vulnerable_Health_Damage_Bonus,
    Vulnerable_Reduction_Percent,
    Fortified_Health,
    Fortified_Health_Damage_Reduction_Bonus,
    Fortified_Health_Application_Bonus,
    Damage_Percent_Bonus_When_Fortified,
    Damage_Percent_Bonus_To_Fortified,
    Follow_Target_ACDID,
    Follow_Target_Type,
    NPC_Talk_Target_ANN,
    Look_Target_Server_ANN,
    Look_Target_Broadcast_Intensity,
    Look_Target_Broadcast_Radius,
    Stealthed,
    GemQuality,
    Gem_Attributes_Multiplier,
    ItemBuffIcon,
    Gizmo_Actor_SNO_To_Spawn,
    Gizmo_Actor_To_Spawn_Scale,
    Attachment_Handled_By_Client,
    Forced_Enemy_ACDID,
    AI_In_Special_State,
    AI_Used_Scripted_Spawn_Anim,
    AI_Spawned_By_Inactive_Marker,
    AI_Disable_Wander,
    AI_Idle_Awareness_Radius_Override,
    AI_Combat_Awareness_Radius_Override,
    Headstone_Player_ANN,
    Movement_Scalar_Reduction_Percent,
    Movement_Scalar_Reduction_Resistance,
    World_Seed,
    Observer,
    Resurrect_As_Observer,
    Registered_To_Tracked_Checkpoints,
    Checkpoint_Resurrection_Allowed_Game_Time,
    Checkpoint_Resurrection_Forced_Game_Time,
    Corpse_Resurrection_Allowed_Game_Time,
    Corpse_Resurrection_Charges,
    Busy,
    Afk,
    RTC_Playing,
    Last_Action_Timestamp,
    Portal_Next_Time,
    Operatable,
    Spawner_Concurrent_Count_ID,
    Disabled,
    Skill_Override,
    Skill_Override_Active,
    Skill_Override_Active_Any,
    Skill_Override_Ended,
    Skill_Override_Ended_Active,
    Skill_Icon_Override_Normal,
    Skill_Icon_Override_Mouse_Over,
    Skill_Icon_Override_Pushed,
    Skill_Icon_Override_Inactive,
    Rogue_Skill_Imbue_Type,
    Evade_Override,
    Unlocked_Skill_Enchant_Slots,
    Unlocked_Skill_Passive_Slots,
    Rogue_Specialization,
    Druid_Spirit_Bond_Unlocked,
    Druid_Spirit_Bond,
    Rogue_Inner_Sight_Gauge,
    Weapon_Expertise_Level,
    Weapon_Expertise_Experience,
    Active_Technique_Slot,
    Skill_Arsenal_Slot,
    Is_Power_Proxy,
    Flippy_ID,
    Set_Item_Count,
    Spawner_Countdown_Percent,
    Power_Disabled,
    Power_Manual_Activation_Disabled,
    Last_ACD_Attacked_By,
    Gold_PickUp_Radius,
    Client_Only_Effect,
    Power_Saved_Attribute,
    Looping_Animation_Suppress_Item_Tooltips,
    Looping_Animation_Start_Time,
    Looping_Animation_End_Time,
    Looping_Animation_Text_SNO,
    Looping_Animation_Text_Label,
    Looping_Animation_Context_ANN,
    Heal_Effect_Last_Played_Tick,
    Resource_Effect_Last_Played_tick,
    Thorns_Effect_Last_Played_tick,
    Turn_Rate_Scalar,
    No_Health_Drop,
    Leader,
    IsContentRestrictedActor,
    God,
    EasyKill,
    EasyDie,
    NeverDie,
    NeverDieBuffID,
    IAmDeath,
    FreeCastCheat,
    FreeCastCDCheat,
    CDCheat,
    NoDamageRange,
    FreeCrafting,
    CraftingCritCheat,
    SkillReqsDisabled,
    SkillSlotReqsDisabled,
    DrawPathfinds,
    DisablePotionDrops,
    EnableWorldTierItemRestrictions,
    MinimapActive,
    Last_Blocked_ACD,
    Last_Blocked_Time,
    Weapons_Hidden,
    Main_Hand_Weapon_Hidden,
    Off_Hand_Weapon_Hidden,
    Actor_Updates_Attributes_From_Owner,
    Taunt_Target_ACD,
    Charm_Source_ACD,
    Fear_Source_ACD,
    Update_Interval_Override,
    Projectile_Effect_SNO,
    Power_Effect_Size,
    Power_Effect_Intensity,
    Power_Effect_Duration,
    Power_Effect_Size_Per_Power,
    Power_Effect_Intensity_Per_Power,
    Power_Effect_Intensity_Per_Skill_Rank,
    Power_Effect_Duration_Per_Power,
    Power_Effect_Length,
    Power_Effect_Width,
    Power_Effect_Height,
    Power_Effect_Length_Per_Power,
    Power_Effect_Width_Per_Power,
    Power_Effect_Height_Per_Power,
    Power_Effect_Custom_Value_1,
    Power_Effect_Custom_Value_2,
    Power_Effect_Custom_Value_3,
    Power_Effect_Custom_Value_4,
    Power_Effect_Routing_Function_A,
    Power_Effect_Routing_Function_B,
    Power_Effect_Routing_Function_C,
    Power_Effect_Rope_Rigidity,
    Power_Effect_Routing_Function_A_Per_Power,
    Power_Effect_Routing_Function_B_Per_Power,
    Power_Effect_Routing_Function_C_Per_Power,
    Power_Effect_Rope_Rigidity_Per_Power,
    On_Hit_CC_Proc_Chance,
    On_Crit_CC_Proc_Chance,
    On_Hit_Knockback_Proc_Chance,
    On_Hit_Vulnerable_Proc_Chance,
    On_Hit_Vulnerable_Proc_Duration_Seconds,
    On_Hit_Execute_Low_Health_Non_Elite_Chance,
    Movement_Bonus_On_Elite_Kill,
    Movement_Bonus_On_Elite_Kill_Duration,
    Damage_Bonus_On_Elite_Kill,
    Damage_Bonus_On_Elite_Kill_Duration,
    Damage_Reduction_On_Elite_Kill,
    Damage_Reduction_On_Elite_Kill_Duration,
    Hitpoints_On_Elite_Kill,
    Damage_Done_Reduction_Percent_On_Pet_Crit,
    Damage_Done_Reduction_On_Pet_Crit_Duration,
    Attack_Speed_Bonus_On_Dodge,
    Attack_Speed_Bonus_On_Dodge_Duration,
    Damage_Bonus_Percent_On_Dodge,
    Damage_Bonus_Percent_On_Dodge_Duration,
    Fortified_When_Struck_Percent_Chance,
    Fortified_When_Struck_Amount,
    Barrier_When_Struck_Percent_Chance,
    Proc_Flat_Hitpoints_On_Hit,
    Proc_Flat_Hitpoints_On_Hit_Unscaled_By_Player_Health,
    Damage_Done_Percent_Reduction,
    Damage_Percent_Reduction_From_Elites,
    Damage_Percent_Bonus_Vs_Elites,
    Multiplicative_Damage_Percent_Bonus_Vs_Elites,
    Damage_Type_Percent_Bonus_Vs_Elites,
    Damage_Percent_Bonus_Vs_CC_Target,
    Multiplicative_Damage_Percent_Bonus_Vs_CC_Target,
    Damage_Percent_Bonus_Vs_CC_All,
    Damage_Percent_Bonus_Against_Dot_Type,
    Damage_Percent_Bonus_While_Shapeshifted,
    Damage_Percent_Bonus_Per_Shapeshift_Form,
    Multiplicative_Damage_Percent_Bonus_Per_Shapeshift_Form,
    Damage_Percent_Bonus_When_Weapon_Swapping,
    Damage_Percent_Bonus_While_Affected_By_Power,
    Damage_Percent_Reduction_From_Dotted_Enemy,
    All_Damage_Percent_Reduction_From_Dotted_Enemy,
    Damage_Percent_Reduction_From_CCed_Target,
    Damage_Percent_Reduction_From_CCed_Target_Any,
    Damage_Percent_Reduction_From_Vulnerable_Target,
    Damage_Percent_Reduction_From_Targets_With_Skill_Tag,
    Item_Manipulation_Timeout,
    Picked_Up_Time,
    Unequipped_Time,
    Last_ACD_Killed_Time,
    CannotDieDuring,
    Weapon_On_Hit_Percent_Bleed_Proc_Chance,
    Weapon_On_Hit_Percent_Bleed_Proc_Damage,
    Multiplicative_Weapon_On_Hit_Percent_Bleed_Proc_Damage,
    Weapon_On_Hit_Percent_Bleed_Proc_Duration,
    Power_Damage_Percent_Bonus,
    Multiplicative_Power_Damage_Percent_Bonus,
    Power_Damage_Percent_Penalty,
    Power_Instance_Damage_Percent_Bonus,
    Multiplicative_Power_Instance_Damage_Percent_Bonus,
    Power_Instance_Crit_Chance_Bonus,
    Power_Instance_Crit_Damage_Bonus,
    Multiplicative_Power_Instance_Crit_Damage_Bonus,
    Power_Instance_Overpower_Chance_Bonus,
    Power_Cooldown_Reduction,
    Power_Duration_Bonus_Pct,
    Power_Crit_Percent_Bonus,
    Power_Damage_Type_Override,
    Item_Level_Requirement_Reduction,
    Waiting_To_Accept_Resurrection,
    Ghosted,
    Perk_Buff_Poll_Next_Time,
    Known_By_Owner,
    Never_Deactivates,
    Projectile_Detonate_Time,
    Projectile_Uncapped_Lifetime,
    Effect_Owner_ANN,
    Elite_Engaged,
    Engaged_Rare_Time,
    CrowdControl_Projected_End_Time,
    Has_Dropped_Special_loot,
    Scroll_Buff,
    Buff_Exclusive_Type_Max,
    Actor_Forwards_Buffs,
    Item_Marked_As_Junk,
    Item_Is_BOE,
    Season,
    Item_Base_Cost,
    DamageDoneTotalTrackedHi,
    DamageDoneTotalTrackedLo,
    DamageDoneTrackingStartTick,
    PowerPersistsAcrossGames,
    Experience_Bonus_Percent_IGR_Buff,
    Experience_Bonus_Percent_Anniversary_Buff,
    Experience_Bonus_Percent_Community_Buff,
    Experience_Bonus_Percent_Super_Scalar,
    Experience_Bonus_Percent_Super_Scalar_Total,
    AlwaysShowFloatingNumbers,
    Supress_Thorns_Effect,
    Dynamic_Entrance_GUID,
    Bonus_Chance_To_Be_Crit_Hit,
    Bonus_Chance_To_Be_Crit_Hit_By_Actor,
    Power_Bonus_Attack_Radius,
    Power_Reduction_Attack_Radius,
    Item_Store_Player_High,
    Item_Store_Player_Low,
    Item_Equipped_But_Disabled,
    Item_Legendary_Affix_Disabled,
    Attribute_Projectile_Pass_Through,
    Set_Item_Discount,
    Dont_Update_Camera_While_Attached,
    Linked_Dynamic_Entrance_GUID,
    Boost_TC_Index,
    Boost_TC_NextTime,
    Item_Rest_Bonus_Pool,
    Item_Unlucky_Bonus_Secs,
    Item_Unlucky_Bonus_Allow,
    Random_Item_Unlucky_Bonus,
    Avenger_Buildup_Secs,
    Evade_Max_Charges,
    Evade_Reduce_Cooldown_On_Attack,
    Evade_Movement_Dodge_Chance,
    Prevent_Evade_During,
    Item_Assigned_Account_High,
    Item_Assigned_Account_Low,
    Pierce_Charge,
    Resurrected,
    Thorns_AOE_Radius_Next_Time,
    Movement_Destroys_Waller_Walls,
    Mail_Flag_Icon,
    Forced_Move,
    CurrentPowerHitCount,
    LastTimeBlockedAnAttack,
    Last_Time_Damaged,
    Last_Time_Inflicted_Damage,
    Disable_Proximity_Checks,
    Mounted,
    Current_Mount,
    Mount_Dismount_Dmg_Bonus,
    Mount_Fear_Current,
    Mount_Fear_Reduction_Pct,
    Mount_Fear_Increase_Rate_Per_Second,
    Mount_Aggro_Reduction_Base_Pct,
    Mount_Aggro_Reduction_Bonus_Pct,
    Mount_Aggro_Reduction_Total,
    Mount_Carrot_Max_Base,
    Mount_Carrot_Max_Bonus,
    Mount_Carrot_Max_Total,
    Mount_Carrot_Regen_Base,
    Mount_Carrot_Regen_Bonus_Pct,
    Mount_Carrot_Regen_Total,
    Mounted_ACD,
    Rider_ACD,
    Gizmo_Player_State,
    Gizmo_Anim_Player_State,
    Gizmo_Max_DRLG_Operate_Count,
    Retreating,
    Retreat_Radius_Override,
    Retreat_Soft_Disable,
    Damage_Bonus_To_Near,
    Multiplicative_Damage_Bonus_To_Near,
    Damage_Bonus_To_Far,
    Multiplicative_Damage_Bonus_To_Far,
    Crit_Chance_Bonus_To_Near,
    Crit_Chance_Bonus_To_Far,
    Crit_Damage_Bonus_To_Near,
    Crit_Damage_Bonus_To_Far,
    Damage_Reduction_From_Near,
    Damage_Reduction_From_Far,
    Damage_Increase_From_Near,
    Damage_Increase_From_Far,
    Damage_Bonus_To_Low_Health,
    Multiplicative_Damage_Bonus_To_Low_Health,
    Damage_Bonus_To_High_Health,
    Multiplicative_Damage_Bonus_To_High_Health,
    Damage_Reduction_At_Low_Health,
    Damage_Reduction_At_High_Health,
    Damage_Bonus_At_High_Health,
    Multiplicative_Damage_Bonus_At_High_Health,
    Damage_Reduction,
    Damage_Reduction_While_Having_Shield,
    Damage_Reduction_While_Crowd_Controlled,
    Damage_Reduction_While_Stationary,
    Damage_Increase_While_Stationary,
    Damage_Type_Damage_Reduction,
    Unstoppable,
    Crowd_Control_Build_Up,
    Crowd_Control_Build_Up_Threshold_Base,
    Crowd_Control_Build_Up_Threshold,
    Stagger_Threshold_Additional_Player,
    Stagger_Decay_Rate_Additional_Player,
    Boss_In_Combat_ANN,
    Health_Bar_Visibility,
    Cannot_Be_Staggered,
    Staggered,
    Staggered_Time_Remaining,
    Necro_Corpse_Charges,
    Necro_Corpse_Source_Actor_SNO,
    AI_Prop_Type,
    AI_Prop_Partner_ANN,
    AI_Prop_Pairing_Name,
    Talent_Rank,
    Talent_Rank_Bonus,
    Talent_Rank_Total,
    Skill_Rank_Bonus,
    Skill_Rank_Skill_Tag_Bonus,
    Skill_Rank_All_Bonus,
    Skill_Rank_Bonus_Temporary,
    Skill_Rank_Skill_Tag_Bonus_Temporary,
    Skill_Rank_All_Bonus_Temporary,
    Skill_Rank_Grant,
    Skill_Rank_Skill_TagGrant,
    Skill_Rank_All_Grant,
    Cheat_Skill_Rank_All,
    Custom_Power_Value_1,
    Custom_Power_Value_2,
    Custom_Power_Flat_Value_1,
    Custom_Power_Flat_Value_1_Unscaled_By_Player_Health,
    Custom_Power_Flat_Value_2,
    Custom_Power_Flat_Value_2_Unscaled_By_Player_Health,
    Affix_Value_1,
    Affix_Value_2,
    Affix_Flat_Value_1,
    Affix_Flat_Value_1_Unscaled_By_Player_Health,
    Affix_Flat_Value_2,
    Affix_Flat_Value_2_Unscaled_By_Player_Health,
    Legendary_Affix_Equipped,
    Condition_Rune_Scalar,
    Effect_Rune_Magnitude,
    Effect_Rune_Magnitude_Flat,
    Effect_Rune_Magnitude_Flat_Unscaled_By_Player_Health,
    Effect_Rune_Magnitude_Total,
    ShopRestockTimeHi,
    ShopRestockTimeLo,
    Resurrection_at_Headstone_Allowed,
    Players_Contributing_To_Resurrection,
    Headstone_Resurrection_Progress,
    Headstone_Resurrection_Progress_Client,
    Headstone_Actor_Override,
    ManuallyTrackedQuestSNO,
    OverrideTrackedQuestSNO,
    ManuallyTrackedAchievementSNO,
    OverrideTrackedAchievementSNO,
    Combat_Effect_Chance_Bonus,
    Combat_Effect_Chance_Bonus_Per_Damage_Type,
    Combat_Effect_Chance_Bonus_Per_Skill,
    Combat_Effect_Chance_Bonus_Barrier_Active,
    Hit_Effect_Chance_Bonus_Per_Skill_Tag,
    Slowkill,
    XPDisable,
    InstantRez,
    Force_Crit,
    Force_Overpower,
    Force_Hit_Effect,
    Knockback,
    IgnoreAttackAndDefense,
    AlwaysPlayGetHit,
    Phasing_Disabled,
    DebugLoggingTypesEnabled,
    RevealMinimapAllScenes,
    Barrier_Bonus_Percent,
    Barrier_Duration_Bonus_Percent,
    Shrine_Elixir_Duration_Bonus,
    Gold_Find,
    Gizmo_Active_cooldown_end_time,
    Pet_Damage_Bonus_Percent,
    Pet_Damage_Reduction_Percent,
    Pet_Attack_Speed_Bonus_Percent,
    Pet_Move_Speed_Bonus_Percent,
    Previous_Health_Percent,
    Health_Percent_Callback_Count,
    Max_Concurrent_Summons_Override,
    Player_Is_AI_Controlled,
    Player_Is_Trading,
    Player_Is_Party_Invitable,
    Item_Find,
    NPC_Replaced_By_Follower,
    NPC_Cloned_From_Actor,
    NPC_Cloned_From_Actor_SNO,
    NPC_Clone_Visibility,
    NPC_Cloned_For_Quest,
    Chatter_Cooldown,
    Imbued_Affix,
    Imbued_Affix_Seed,
    Imbued_Affix_Carry,
    Affix_Replaced,
    Imbued_Affix_Item_Power,
    Imbued_Affix_From_Definition,
    Carryable_Receptacle_Count,
    Carryable_Being_Carried,
    Carryable_Is_Picked_Up,
    Carryable_Accumulated_Damage,
    Chargeable_Gizmo_Progress,
    Chargeable_Paused,
    Crafting_Crit_Chance_Percent_Bonus,
    Use_Alternate_Name,
    Death_Message_Actor_Override,
    Use_Boss_Camera,
    Boss_Camera_Follows_Player,
    Boss_Camera_Override,
    Invisible_To_Spawning,
    Is_AutoCast_Effect,
    Is_Last_Shot_Effect,
    Quest_Referencing_Actor,
    Quest_Callback_Referencing_Actor,
    Monster_Flavor_Text_Override,
    Vessel_Of_Hatred_Progress,
    Owning_Quest,
    Bounty_Points,
    Capped_Item_Spawned_By,
    Item_Visible_To_Class_Bit,
    Power_Interrupt_Remaining_Damage,
    Class_Damage_Reduction_Percent_PvP,
    Event_Participant_Timeout,
    Local_or_World_Event_SNO,
    Town_Portal_Return_Delete_Timer,
    Gizmo_Triggered_Bounty_SNO_Target,
    Gizmo_Triggered_Bounty_Target_Disabled,
    Assassinate_Bounty_Target_Gizmo,
    Gizmo_Starts_Side_Quest,
    Side_Quest_Started_By_Gizmo_,
    Gizmo_Triggered_Bounty_SNO_Target_Player,
    Last_Survey_Played_Secs,
    Quest_Referencing_Item,
    Ignored_By_Quest_Objectives,
    Last_New_User_Survey_Version,
    Player_Has_Reward_Choice_Available,
    Partition_Highest_Player_Level,
    Quest_Phase_Referencing_Actor,
    Dynamic_Prefab_Id,
    Player_In_Town_Level_Area,
    Favor_Next_Hi,
    Favor_Next_Lo,
    Favor_Level,
    Last_Viewed_Favor_Next_Hi,
    Last_Viewed_Favor_Next_Lo,
    Last_Viewed_Favor_Level,
    Blessing_Level,
    Blessing_Unlock_Points,
    Blessing_Refund_Count,
    Monster_Kill_XP_Bonus,
    Item_Sell_Bonus,
    Salvage_Rarity_Bonus,
    Elixir_Duration_Bonus,
    Malignant_Heart_Bonus,
    Season_Rank_Bonus,
  }

  enum SNOGroup {
    Actor,
    NPCComponentSet,
    AIBehavior,
    AIState,
    AmbientSound,
    Anim,
    Anim2D,
    AnimSet,
    Appearance,
    Hero,
    Cloth,
    Conversation,
    ConversationList,
    EffectGroup,
    Encounter,
    Explosion,
    FlagSet,
    Font,
    GameBalance,
    Global,
    LevelArea,
    Light,
    MarkerSet,
    Observer,
    Particle,
    Physics,
    Power,
    Quest,
    Rope,
    Scene,
    Script,
    ShaderMap,
    Shader,
    Shake,
    SkillKit,
    Sound,
    StringList,
    Surface,
    Texture,
    Trail,
    UI,
    Weather,
    World,
    Recipe,
    Condition,
    TreasureClass,
    Account,
    Material,
    Lore,
    Reverb,
    Music,
    Tutorial,
    AnimTree,
    Vibration,
    wWiseSoundBank,
    Speaker,
    Item,
    PlayerClass,
    FogVolume,
    Biome,
    Wall,
    SoundTable,
    Subzone,
    MaterialValue,
    MonsterFamily,
    TileSet,
    Population,
    MaterialValueSet,
    WorldState,
    Schedule,
    Vector_Field,
    Storyboard,
    Territory,
    AudioContext,
    VOProcess,
    DemonScroll,
    QuestChain,
    LoudnessPreset,
    ItemType,
    Achievement,
    Crafter,
    HoudiniParticlesSim,
    Movie,
    TiledStyle,
    Affix,
    Reputation,
    ParagonNode,
    MonsterAffix,
    ParagonBoard,
    SetItemBonus,
    StoreProduct,
    ParagonGlyph,
    ParagonGlyphAffix,
    Challenge,
    Marking_Shape,
    ItemRequirement,
    Boost,
    Emote,
    Jewelry,
    PlayerTitle,
    Emblem,
    Dye,
    FogOfWar,
    ParagonThreshold,
    AIAwareness,
    TrackedReward,
    CollisionSettings,
    Aspect,
    ABTest,
    Stagger,
    EyeColor,
    Makeup,
    MarkingColor,
    HairColor,
    DungeonAffix,
    Activity,
    Season,
    HairStyle,
    FacialHair,
    Face,
    AICoordinator,
    MAX_SNO_GROUPS,
  }

  enum GizmoType {
    Invalid ,
    Door ,
    Chest ,
    Portal ,
    Waypoint ,
    Checkpoint ,
    Shrine ,
    Headstone ,
    Event_Reward_Chest ,
    Portal_Destination ,
    Breakable_Container ,
    Hidden_Cache ,
    Shared_Stash ,
    Spawner ,
    POI_Camera ,
    Traversal ,
    Trigger ,
    Destroyable_Object ,
    Switch ,
    Destroy_Self_When_Near ,
    Return_Town_Portal ,
    Graveyard ,
    Boss_Door ,
    PVP_Chest ,
    PVP_Obelisk ,
    Breakable_Container_Arrangement ,
    Destroyable_Arrangement ,
    Necro_Corpse ,
    Carryable ,
    Carryable_Receptacle ,
    Chargeable ,
    DEPRECATED___DO_NOT_USE ,
    Sign ,
    Tracked_Checkpoint ,
    Quest_Switch ,
    Wardrobe ,
    Paragon_Glyph_Upgrade ,
    World_Tier_Select ,
    Mount_Summon_Post ,
    Quest_Chest ,
    Unique_Operator_Chest ,
    Chair ,
    Party_Member_Portal ,
    Participant_Timer ,
  }

  enum ActorType {
    Invalid,
    None,
    Monster,
    Gizmo,
    ClientEffect,
    ServerProp,
    Environment,
    Critter,
    Player,
    Item,
    AxeSymbol,
    Projectile,
    CustomBrain,
    Foliage,
    MinimapSecret,
    Mount,
    ACTORTYPE_COUNT,
  }

  declare interface Camera {
    worldPointToScreenPoint(x: number, y: number, color?: number): { x: number, y: number }
  }

  declare interface RActor {
    id: number;
    acd?: ActorCommonData;
  }

  declare enum LocationType {
    World,
    Inventory
  }

  declare class WorldLocation {
    x: number;
    y: number;
    z: number;
    scale: number;
  }

  declare class InventoryLocation {
    idACDContainer: number;
    slot: number;
    x: number;
    y: number;
  }

  declare class ActorLocation {
    actorLocation: LocationType;
    worldLocation: WorldLocation;
    invLocation: InventoryLocation;
  }

  declare class InventorySlot {
    squares: Array<ActorCommonData?>;
  }

  declare class ActorInventory {
    type: number;
    slots: Array<InventorySlot>;
  }

  declare interface ActorCommonData {
    id: number;
    name: string;
    actorType: ActorType;
    gbType: SNOGroup;
    gbid: number;
    listIdentifiedAffixGBIDs: Array<{ id: number, name: string }>;
    location: ActorLocation;
    inventory?: ActorInventory;
    monsterRarity: number;
    gizmoType: GizmoType;
    healthPct: number;

    getAttributeFloat(attributeId: AttributeId): number | undefined;
    getAttributeInt(attributeId: AttributeId): number | undefined;
  }

  declare var camera: Camera

  declare function getMe(): RActor | undefined
  declare function getRActors(): Array<RActor>
  declare function getACDs(): Array<ActorCommonData>
}
